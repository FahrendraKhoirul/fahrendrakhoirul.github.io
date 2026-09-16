const MEDIUM_USERNAME = "fahrendra.khoirul";
const POST_LAYOUTS = ["feature", "tall", "wide", "compact", "compact", "wide", "banner", "standard", "standard"];

function extractThumbnail(post) {
  const thumbnail = post.thumbnail || post.enclosure?.link;
  if (thumbnail) return thumbnail;

  const content = document.createElement("div");
  content.innerHTML = post.description || post.content || "";
  return content.querySelector("img")?.src || "";
}

function renderPostSkeletons(list) {
  list.innerHTML = Array.from(
    { length: 6 },
    () => '<span class="post-skeleton" aria-hidden="true"></span>',
  ).join("");
}

function bindPostCardInteractions(card) {
  card.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;

    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--pointer-x");
    card.style.removeProperty("--pointer-y");
  });
}

function revealMediumPosts() {
  const posts = document.querySelectorAll(".post-card.reveal");
  if (!posts.length) return;

  const reveal = (post) => post.classList.add("in");
  if (!("IntersectionObserver" in window)) {
    posts.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  posts.forEach((post) => observer.observe(post));
}

async function loadMediumPosts() {
  const list = document.querySelector(".post-list");
  if (!list) return;

  const feedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  renderPostSkeletons(list);

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.status !== "ok" || !data.items?.length) throw new Error("empty feed");

    list.replaceChildren();
    data.items.slice(0, 12).forEach((post, index) => {
      const date = new Date(post.pubDate);
      const dateString = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      const thumbnail = extractThumbnail(post);
      const row = document.createElement("a");
      row.href = post.link;
      row.target = "_blank";
      row.rel = "noopener noreferrer";
      row.className = `post-card post-card--${POST_LAYOUTS[index % POST_LAYOUTS.length]} reveal`;
      row.setAttribute("aria-label", `${post.title}, published ${dateString}`);
      row.innerHTML = `
        <span class="post-media${thumbnail ? "" : " post-media-empty"}">
          ${thumbnail ? '<img class="post-thumb" alt="" loading="lazy" decoding="async">' : ""}
          <span class="post-media-shade" aria-hidden="true"></span>
        </span>
        <span class="post-card-content">
          <span class="post-card-meta">
            <span class="post-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <span class="post-date"></span>
          </span>
          <h3 class="post-title"></h3>
          <span class="post-card-footer">
            <span class="post-card-read">Read on Medium</span>
            <span class="post-card-arrow" aria-hidden="true">&rarr;</span>
          </span>
        </span>
      `;
      row.querySelector(".post-date").textContent = dateString;
      row.querySelector(".post-title").textContent = post.title;
      const image = row.querySelector(".post-thumb");
      if (image) {
        image.alt = `Thumbnail for ${post.title}`;
        image.src = thumbnail;
        image.addEventListener("error", () => {
          image.remove();
          row.querySelector(".post-media").classList.add("post-media-empty");
        });
      }
      bindPostCardInteractions(row);
      list.appendChild(row);
    });
    revealMediumPosts();
  } catch (error) {
    list.innerHTML = `<p class="state-msg">// couldn't load Medium feed — <a href="https://medium.com/@${MEDIUM_USERNAME}" target="_blank" rel="noopener">read on Medium &nearr;</a></p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadMediumPosts);
