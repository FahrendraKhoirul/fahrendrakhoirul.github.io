// ============================================
// Manifesto hero — sequential line reveals
// ============================================
function initManifesto() {
  const lines = document.querySelectorAll(".manifesto-line");
  const sub = document.querySelector(".manifesto-sub");
  if (!lines.length) return;

  // Trigger reveal on load with staggered timing
  requestAnimationFrame(() => {
    lines.forEach((line) => line.classList.add("in"));
    if (sub) sub.classList.add("in");
  });
}

// ============================================
// Home bento piano control
// ============================================
function initPianoTile() {
  const toggle = document.querySelector(".sound-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isPlaying = toggle.classList.toggle("is-playing");
    toggle.setAttribute("aria-pressed", String(isPlaying));
    toggle.querySelector("span:last-child").textContent = isPlaying ? "Sounding" : "Play a note";
  });
}

// ============================================
// Home work and projects tile
// ============================================
function initWorkProjectsTile() {
  const tile = document.querySelector(".work-projects-card");
  if (!tile) return;

  const copy = tile.querySelector(".work-projects-copy");
  const laptop = tile.querySelector(".work-projects-laptop");

  const setActive = (isActive) => {
    tile.classList.toggle("is-hovered", isActive);

    if (copy) {
      copy.style.opacity = isActive ? "0.85" : "";
      copy.style.transform = isActive ? "scale(0.9)" : "";
    }

    if (laptop) {
      laptop.style.transform = isActive ? "translate(0, -2.25rem) rotate(-4deg) scale(1.18)" : "";
    }
  };

  tile.addEventListener("pointerenter", () => setActive(true));
  tile.addEventListener("pointerleave", () => setActive(false));
  tile.addEventListener("focusin", () => setActive(true));
  tile.addEventListener("focusout", () => setActive(false));
}

// ============================================
// Reveal-on-scroll (generic)
// ============================================
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}

// ============================================
// Staggered children reveal
// ============================================
function initStagger() {
  const containers = document.querySelectorAll(".stagger");
  if (!containers.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  containers.forEach((el) => io.observe(el));
}

// ============================================
// Project filter (projects.html)
// ============================================
function initProjectFilter() {
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".project-card");
  if (!chips.length) return;
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.dataset.filter;
      cards.forEach((card) => {
        const tags = (card.dataset.tags || "").split(",");
        const show = filter === "all" || tags.includes(filter);
        card.style.display = show ? "" : "none";
      });
    });
  });
}

// ============================================
// Medium RSS embed (blog.html)
// ============================================
const MEDIUM_USERNAME = "fahrendra.khoirul";

async function loadMediumPosts() {
  const list = document.querySelector(".post-list");
  if (!list) return;

  const feedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  list.innerHTML = `<p class="state-msg">// loading posts…</p>`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data.status !== "ok" || !data.items?.length) throw new Error("empty feed");

    list.innerHTML = "";
    data.items.slice(0, 12).forEach((post) => {
      const date = new Date(post.pubDate);
      const dateStr = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      const row = document.createElement("a");
      row.href = post.link;
      row.target = "_blank";
      row.rel = "noopener noreferrer";
      row.className = "post-row reveal";
      row.innerHTML = `
        <span class="post-date">${dateStr}</span>
        <h3>${post.title}</h3>
        <span class="arrow">Read &rarr;</span>
      `;
      list.appendChild(row);
    });
    initReveal();
  } catch (err) {
    list.innerHTML = `<p class="state-msg">// couldn't load Medium feed — <a href="https://medium.com/@${MEDIUM_USERNAME}" target="_blank" rel="noopener">read on Medium &nearr;</a></p>`;
  }
}

// ============================================
// Init
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initManifesto();
  initPianoTile();
  initWorkProjectsTile();
  initReveal();
  initStagger();
  initProjectFilter();
  loadMediumPosts();
});
