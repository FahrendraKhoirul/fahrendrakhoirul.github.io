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
// Home photo gallery
// ============================================
function initGalleryTile() {
  const gallery = document.querySelector(".gallery-card");
  const image = gallery?.querySelector(".gallery-image");
  if (!gallery || !image) return;

  const photos = [
    "gallery/photo-01.webp",
    "gallery/photo-02.webp",
    "gallery/photo-03.webp",
    "gallery/photo-04.webp",
    "gallery/photo-05.webp",
    "gallery/photo-06.webp",
  ];
  const dots = [...gallery.querySelectorAll("[data-gallery-dot]")];
  let currentIndex = 0;
  let autoSlideTimer;
  let isPaused = false;

  const render = (index) => {
    currentIndex = (index + photos.length) % photos.length;
    image.classList.add("is-changing");
    image.src = `assets/${photos[currentIndex]}`;
    image.alt = `Travel photo ${currentIndex + 1} of ${photos.length}`;
    image.onload = () => image.classList.remove("is-changing");
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentIndex);
      dot.classList.toggle("bg-brand", dotIndex === currentIndex);
      dot.classList.toggle("bg-white/80", dotIndex !== currentIndex);
      dot.setAttribute("aria-current", dotIndex === currentIndex ? "true" : "false");
    });
  };

  const startAutoSlide = () => {
    window.clearInterval(autoSlideTimer);
    if (isPaused) return;
    autoSlideTimer = window.setInterval(() => render(currentIndex + 1), 4000);
  };

  const pauseAutoSlide = () => {
    isPaused = true;
    window.clearInterval(autoSlideTimer);
  };

  const resumeAutoSlide = () => {
    isPaused = false;
    startAutoSlide();
  };

  const renderAndRestart = (index) => {
    render(index);
    startAutoSlide();
  };

  gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => renderAndRestart(currentIndex - 1));
  gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => renderAndRestart(currentIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => renderAndRestart(Number(dot.dataset.galleryDot)));
  });

  render(0);
  gallery.addEventListener("pointerenter", pauseAutoSlide);
  gallery.addEventListener("pointerleave", resumeAutoSlide);
  gallery.addEventListener("focusin", pauseAutoSlide);
  gallery.addEventListener("focusout", (event) => {
    if (!gallery.contains(event.relatedTarget)) resumeAutoSlide();
  });
  startAutoSlide();
}

// ============================================
// Home profile floating notes
// ============================================
function initProfileNotes() {
  const card = document.querySelector(".intro-card");
  const notesLayer = card?.querySelector(".intro-notes");
  if (!card || !notesLayer) return;

  let cleanupTimer;
  const noteGlyphs = ["♪", "♫", "♩", "♪"];

  const clearNotes = () => {
    window.clearTimeout(cleanupTimer);
    notesLayer.replaceChildren();
    card.classList.remove("is-notes-active");
  };

  const spawnNotes = () => {
    window.clearTimeout(cleanupTimer);
    notesLayer.replaceChildren();
    card.classList.add("is-notes-active");

    noteGlyphs.forEach((glyph, index) => {
      const note = document.createElement("span");
      note.className = "intro-note";
      note.textContent = glyph;
      note.style.right = `${8 + Math.random() * 30}%`;
      note.style.top = `${10 + Math.random() * 68}%`;
      note.style.setProperty("--note-delay", `${index * 90 + Math.random() * 90}ms`);
      note.style.setProperty("--note-duration", `${1150 + Math.random() * 500}ms`);
      note.style.setProperty("--note-drift", `${-0.5 + Math.random() * 1}rem`);
      note.style.setProperty("--note-rotation", `${-12 + Math.random() * 24}deg`);
      notesLayer.appendChild(note);
    });

    cleanupTimer = window.setTimeout(clearNotes, 2100);
  };

  card.addEventListener("pointerenter", spawnNotes);
  card.addEventListener("focusin", spawnNotes);
  card.addEventListener("pointerleave", clearNotes);
  card.addEventListener("focusout", (event) => {
    if (!card.contains(event.relatedTarget)) clearNotes();
  });
}

// ============================================
// Home work and projects tile
// ============================================
function initWorkProjectsTile() {
  const tile = document.querySelector(".work-projects-card");
  if (!tile) return;

  const cta = tile.querySelector(".work-projects-cta");
  const laptop = tile.querySelector(".work-projects-laptop");

  const setActive = (isActive) => {
    tile.classList.toggle("is-hovered", isActive);

    if (cta) {
      cta.style.opacity = isActive ? "0.85" : "";
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
        <span class="arrow" aria-hidden="true">&rarr;</span>
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
  initGalleryTile();
  initProfileNotes();
  initWorkProjectsTile();
  initReveal();
  initStagger();
  initProjectFilter();
  loadMediumPosts();
});
