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
// Projects hero Devicon marquee
// ============================================
function initProjectsMarquee() {
  const marquee = document.querySelector("[data-project-marquee]");
  const tracks = marquee?.querySelectorAll("[data-marquee-track]");
  const items = window.projectsMarqueeItems;
  if (!marquee || !tracks?.length || !Array.isArray(items) || !items.length) return;

  const createItem = (item) => {
    const element = document.createElement("span");
    element.className = "page-hero-marquee-item";
    element.dataset.initial = item.name.charAt(0).toUpperCase();

    const icon = document.createElement("img");
    icon.className = "page-hero-marquee-icon";
    icon.src = item.icon;
    icon.alt = "";
    icon.addEventListener("error", () => {
      element.classList.add("is-icon-missing");
      icon.remove();
    });

    const name = document.createElement("span");
    name.textContent = item.name;

    element.append(icon, name);
    return element;
  };

  tracks.forEach((track) => {
    const fragment = document.createDocumentFragment();
    for (let copy = 0; copy < 2; copy += 1) {
      items.forEach((item) => fragment.appendChild(createItem(item)));
    }
    track.replaceChildren(fragment);
  });
}

// ============================================
// Blog hero writing scratch marquee
// ============================================
function initWritingMarquee() {
  const marquee = document.querySelector("[data-writing-marquee]");
  const tracks = marquee?.querySelectorAll("[data-scribble-track]");
  const lines = window.writingMarqueeLines;
  if (!marquee || !tracks?.length || !Array.isArray(lines) || !lines.length) return;

  const createLine = (line) => {
    const element = document.createElement("span");
    element.className = "page-hero-scribble";
    element.dataset.color = line.color;
    element.style.setProperty("--scribble-rotation", line.rotation);
    element.textContent = line.text;
    return element;
  };

  tracks.forEach((track) => {
    const fragment = document.createDocumentFragment();
    for (let copy = 0; copy < 2; copy += 1) {
      lines.forEach((line) => fragment.appendChild(createLine(line)));
    }
    track.replaceChildren(fragment);
  });
}

// ============================================
// Blog writing prompt paper stack
// ============================================
function initBlogShareCard() {
  const card = document.querySelector("[data-share-card]");
  const trigger = card?.querySelector(".blog-share-trigger");
  const defaultState = card?.querySelector(".blog-share-suffix-state-default");
  const hoverState = card?.querySelector(".blog-share-suffix-state-hover");
  if (!card || !trigger || !defaultState || !hoverState) return;

  let isPressed = false;
  let isPointerOver = false;
  let isFocused = false;

  const setActive = (isActive) => {
    card.classList.toggle("is-active", isActive);
    trigger.setAttribute("aria-pressed", String(isActive));
    trigger.setAttribute("aria-label", isActive ? "Share a writing approach about anything" : "Share a writing approach");
    defaultState.setAttribute("aria-hidden", String(isActive));
    hoverState.setAttribute("aria-hidden", String(!isActive));
    defaultState.style.opacity = isActive ? "0" : "1";
    defaultState.style.transform = isActive ? "translateY(-0.35rem)" : "translateY(0)";
    hoverState.style.opacity = isActive ? "1" : "0";
    hoverState.style.transform = isActive ? "translateY(0)" : "translateY(0.35rem)";
  };

  const render = () => setActive(isPressed || isPointerOver || isFocused);

  trigger.addEventListener("click", () => {
    isPressed = !isPressed;
    render();
  });
  trigger.addEventListener("pointerenter", () => {
    isPointerOver = true;
    render();
  });
  trigger.addEventListener("pointerleave", () => {
    isPointerOver = false;
    render();
  });
  trigger.addEventListener("focusin", () => {
    isFocused = true;
    render();
  });
  trigger.addEventListener("focusout", () => {
    isFocused = false;
    render();
  });

  render();
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
// Init
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initManifesto();
  initPianoTile();
  initGalleryTile();
  initProfileNotes();
  initWorkProjectsTile();
  initProjectsMarquee();
  initWritingMarquee();
  initBlogShareCard();
  initReveal();
  initStagger();
  initProjectFilter();
});
