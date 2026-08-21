// ============================================
// Tempo line — scroll progress
// ============================================
function initTempoLine() {
  const bar = document.querySelector(".tempo-line");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    bar.style.width = pct + "%";
  };
  document.addEventListener("scroll", update, { passive: true });
  update();
}

// ============================================
// Mobile nav toggle
// ============================================
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.primary-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// ============================================
// Reveal-on-scroll
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
// Active nav link
// ============================================
function initActiveLink() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.primary-nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
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
// EDIT ME: replace MEDIUM_USERNAME below with your handle (without @)
// ============================================
const MEDIUM_USERNAME = "fahrendra.khoirul";

async function loadMediumPosts() {
  const list = document.querySelector(".post-list");
  if (!list) return;

  if (MEDIUM_USERNAME === "your-medium-handle") {
    list.innerHTML = `<p class="state-msg">// Set MEDIUM_USERNAME in js/main.js to load your posts automatically.</p>`;
    return;
  }

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
      const dateStr = date.toLocaleDateString("id-ID", {
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
        <span class="arrow">Baca →</span>
      `;
      list.appendChild(row);
    });
    initReveal();
  } catch (err) {
    list.innerHTML = `<p class="state-msg">// couldn't load Medium feed right now — <a href="https://medium.com/@${MEDIUM_USERNAME}" target="_blank" rel="noopener">baca langsung di Medium ↗</a></p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTempoLine();
  initNavToggle();
  initReveal();
  initActiveLink();
  initProjectFilter();
  loadMediumPosts();
});
