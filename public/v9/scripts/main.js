(() => {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("drawer");
  const countdown = document.getElementById("countdown");

  if (!header || !menuBtn || !drawer || !countdown) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  };

  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const setDrawer = (open) => {
    drawer.classList.toggle("open", open);
    menuBtn.classList.toggle("active", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  menuBtn.addEventListener("click", () => {
    setDrawer(!drawer.classList.contains("open"));
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setDrawer(false));
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("in"));
  }

  const target = new Date(countdown.dataset.target).getTime();

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      countdown.innerHTML =
        '<div class="pill"><span class="dot"></span> Jubiläum läuft / Termin erreicht</div>';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const mins = Math.floor(diff / 60000) % 60;
    countdown.innerHTML = `<div class="count"><b>${days}</b><small>Tage</small></div><div class="count"><b>${String(hours).padStart(2, "0")}</b><small>Stunden</small></div><div class="count"><b>${String(mins).padStart(2, "0")}</b><small>Minuten</small></div>`;
  }

  tick();
  setInterval(tick, 60000);

  addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("open")) {
      setDrawer(false);
      menuBtn.focus();
    }
  });
})();
