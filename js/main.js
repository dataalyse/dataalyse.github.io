/* ==========================================================================
   Datalyse — Script comum a todas as páginas
   - Ícones SVG de linha (base Lucide, ISC License — https://lucide.dev)
   - Header, painel mobile, rodapé e botão flutuante (um único template)
   - Links de contato a partir de js/config.js
   - Animações de entrada e fallback de fotos
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     Ícones
     ------------------------------------------------------------------------ */
  const ICONS = {
    "chart": '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    "workflow": '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    "smartphone": '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
    "monitor": '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    "database": '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    "bed": '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
    "utensils": '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    "compass": '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>',
    "bricks": '<rect width="18" height="16" x="3" y="4" rx="1.5"/><path d="M3 9.33h18M3 14.67h18M9 4v5.33M15 9.33v5.34M9 14.67V20"/>',
    "building": '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    "dumbbell": '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
    "sparkles": '<path d="M9.94 15.5a2 2 0 0 0-1.44-1.44l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"/>',
    "briefcase": '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    "whatsapp": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.6 14.1v1.1a.8.8 0 0 1-.87.8 7.9 7.9 0 0 1-3.44-1.22 7.8 7.8 0 0 1-2.4-2.4A7.9 7.9 0 0 1 7.67 8.9a.8.8 0 0 1 .8-.87h1.1a.8.8 0 0 1 .8.69c.05.38.14.75.28 1.12a.8.8 0 0 1-.18.84l-.47.47a6.4 6.4 0 0 0 2.4 2.4l.47-.47a.8.8 0 0 1 .84-.18c.37.14.74.23 1.12.28a.8.8 0 0 1 .69.81z"/>',
    "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "instagram": '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    "pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "menu": '<path d="M4 7h16M4 12h16M4 17h16"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    "check": '<path d="M20 6 9 17l-5-5"/>',
    "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    "layers": '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    "plug": '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    "eye": '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    "send": '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
    "expand": '<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
    "clock": '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
  };

  function icon(name, extraClass) {
    const body = ICONS[name];
    if (!body) return "";
    const cls = "icon" + (extraClass ? " " + extraClass : "");
    return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + body + "</svg>";
  }

  function renderIcons(root) {
    (root || document).querySelectorAll("i[data-icon]").forEach(function (el) {
      const extra = el.getAttribute("class") || "";
      el.outerHTML = icon(el.dataset.icon, extra);
    });
  }

  /* ------------------------------------------------------------------------
     Contato (config.js)
     ------------------------------------------------------------------------ */
  const CFG = typeof DATALYSE !== "undefined" ? DATALYSE : {};
  const waNumber = String(CFG.whatsapp || "").replace(/\D/g, "");

  if (!/^\d{12,13}$/.test(waNumber)) {
    console.warn("[Datalyse] Número de WhatsApp ainda não configurado em js/config.js");
  }

  function waLink(text) {
    const msg = text || CFG.mensagemPadrao || "";
    return "https://wa.me/" + waNumber + (msg ? "?text=" + encodeURIComponent(msg) : "");
  }

  function formatPhone(digits) {
    // 55 + DDD + 8/9 dígitos → +55 (24) 99999-9999
    const m = digits.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
    return m ? "+" + m[1] + " (" + m[2] + ") " + m[3] + "-" + m[4] : "WhatsApp";
  }

  const FILL = {
    whatsapp: function () { return formatPhone(waNumber); },
    email: function () { return CFG.email || ""; },
    instagram: function () { return "@" + (CFG.instagram || ""); },
    cidade: function () { return CFG.cidade || ""; }
  };

  function applyConfig(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = waLink(a.dataset.waText);
      a.target = "_blank";
      a.rel = "noopener";
    });
    scope.querySelectorAll("[data-email]").forEach(function (a) {
      a.href = "mailto:" + (CFG.email || "");
    });
    scope.querySelectorAll("[data-instagram]").forEach(function (a) {
      a.href = "https://www.instagram.com/" + (CFG.instagram || "") + "/";
      a.target = "_blank";
      a.rel = "noopener";
    });
    scope.querySelectorAll("[data-fill]").forEach(function (el) {
      const fn = FILL[el.dataset.fill];
      if (fn) el.textContent = fn();
    });
  }

  /* ------------------------------------------------------------------------
     Templates de header, painel mobile, rodapé e botão flutuante
     ------------------------------------------------------------------------ */
  const NAV = [
    { id: "solucoes", label: "Soluções", href: "solucoes.html" },
    { id: "segmentos", label: "Segmentos", href: "segmentos.html" },
    { id: "portfolio", label: "Portfólio", href: "portfolio.html" },
    { id: "sobre", label: "Sobre", href: "sobre.html" },
    { id: "contato", label: "Contato", href: "contato.html" }
  ];

  const SOLUCOES = [
    { label: "Dashboards de gestão", href: "solucoes.html#bi" },
    { label: "Análise de dados", href: "solucoes.html#dados" },
    { label: "Automação de processos", href: "solucoes.html#automacao" },
    { label: "Aplicativos sob medida", href: "solucoes.html#aplicativos" },
    { label: "Sites e sistemas web", href: "solucoes.html#sites" }
  ];

  const page = document.body.dataset.page || "";

  function navLinks(withChevron) {
    return NAV.map(function (item) {
      const current = item.id === page ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + current + ">" + item.label +
        (withChevron ? icon("chevron-right") : "") + "</a></li>";
    }).join("");
  }

  const brandHTML =
    '<img src="assets/logo-d-96.png" alt="" width="34" height="34">' +
    '<span class="brand__name">datalyse</span>';

  function renderHeader() {
    const header = document.querySelector("[data-component='header']");
    if (!header) return;
    header.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Datalyse — página inicial">' + brandHTML + "</a>" +
        '<nav class="main-nav" aria-label="Menu principal"><ul role="list">' + navLinks(false) + "</ul></nav>" +
        '<a class="btn btn--primary btn--sm header-cta" href="contato.html">Fale com a gente</a>' +
        '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-panel" aria-label="Abrir menu">' +
          icon("menu") +
        "</button>" +
      "</div>";

    const panel = document.createElement("div");
    panel.className = "mobile-panel";
    panel.id = "mobile-panel";
    panel.innerHTML =
      '<div class="mobile-panel__overlay" data-close-menu></div>' +
      '<div class="mobile-panel__sheet" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<div class="mobile-panel__top">' +
          '<a class="brand" href="index.html" aria-label="Datalyse — página inicial">' + brandHTML + "</a>" +
          '<button class="mobile-panel__close" type="button" aria-label="Fechar menu" data-close-menu>' + icon("x") + "</button>" +
        "</div>" +
        '<nav aria-label="Menu principal (mobile)"><ul role="list">' + navLinks(true) + "</ul></nav>" +
        '<div class="mobile-panel__footer">' +
          '<a class="btn btn--primary btn--block" href="#" data-wa>' + icon("whatsapp") + "Falar no WhatsApp</a>" +
          '<div class="mobile-panel__contacts">' +
            '<a href="#" data-email>' + icon("mail") + '<span data-fill="email"></span></a>' +
            '<a href="#" data-instagram>' + icon("instagram") + '<span data-fill="instagram"></span></a>' +
          "</div>" +
        "</div>" +
      "</div>";
    document.body.appendChild(panel);
  }

  function renderFooter() {
    const footer = document.querySelector("[data-component='footer']");
    if (!footer) return;
    const solucoes = SOLUCOES.map(function (s) {
      return '<li><a href="' + s.href + '">' + s.label + "</a></li>";
    }).join("");

    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-about">' +
            '<a class="brand" href="index.html" aria-label="Datalyse — página inicial">' + brandHTML + "</a>" +
            "<p>Consultoria em análise de dados e dashboards de gestão, com desenvolvimento no Microsoft 365, automação de processos e sistemas sob medida.</p>" +
          "</div>" +
          '<div class="footer-col"><h2>Soluções</h2><ul role="list">' + solucoes + "</ul></div>" +
          '<div class="footer-col"><h2>Empresa</h2><ul role="list">' +
            '<li><a href="sobre.html">Sobre</a></li>' +
            '<li><a href="portfolio.html">Portfólio</a></li>' +
            '<li><a href="segmentos.html">Segmentos</a></li>' +
            '<li><a href="contato.html">Contato</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h2>Contato</h2><ul role="list" class="footer-contact">' +
            '<li>' + icon("whatsapp") + '<a href="#" data-wa>WhatsApp</a></li>' +
            '<li>' + icon("mail") + '<a href="#" data-email data-fill="email"></a></li>' +
            '<li>' + icon("instagram") + '<a href="#" data-instagram data-fill="instagram"></a></li>' +
            '<li>' + icon("pin") + '<span><span data-fill="cidade"></span> · Atendimento em todo o Brasil</span></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          '<span>© <span data-year>2026</span> <span class="dl-name">datalyse</span> · Todos os direitos reservados</span>' +
          "<span>Dados exibidos nos painéis do site são demonstrativos.</span>" +
        "</div>" +
      "</div>";
  }

  function renderWhatsAppFloat() {
    const a = document.createElement("a");
    a.className = "wa-float";
    a.href = "#";
    a.setAttribute("data-wa", "");
    a.setAttribute("aria-label", "Conversar com a Datalyse pelo WhatsApp");
    a.innerHTML = '<span class="wa-float__icon">' + icon("whatsapp") + '</span><span class="wa-float__label">WhatsApp</span>';
    document.body.appendChild(a);
  }

  /* ------------------------------------------------------------------------
     Header: estado ao rolar
     ------------------------------------------------------------------------ */
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    let ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------------
     Menu mobile (painel lateral acessível por teclado)
     ------------------------------------------------------------------------ */
  function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const panel = document.getElementById("mobile-panel");
    if (!toggle || !panel) return;
    const sheet = panel.querySelector(".mobile-panel__sheet");
    const background = function () {
      return document.querySelectorAll("main, .site-header, .site-footer, .wa-float");
    };

    function focusables() {
      return Array.prototype.slice.call(
        sheet.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      );
    }

    function open() {
      panel.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("is-locked");
      background().forEach(function (el) { el.inert = true; });
      const first = sheet.querySelector("nav a");
      window.setTimeout(function () { (first || sheet).focus(); }, 60);
      document.addEventListener("keydown", onKey);
    }

    function close() {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-locked");
      background().forEach(function (el) { el.inert = false; });
      document.removeEventListener("keydown", onKey);
      toggle.focus();
    }

    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    toggle.addEventListener("click", open);
    panel.querySelectorAll("[data-close-menu]").forEach(function (el) { el.addEventListener("click", close); });
    // Fecha ao navegar para âncora na mesma página
    panel.querySelectorAll("nav a").forEach(function (a) {
      a.addEventListener("click", function () { if (panel.classList.contains("is-open")) close(); });
    });
    window.matchMedia("(min-width: 961px)").addEventListener("change", function (mq) {
      if (mq.matches && panel.classList.contains("is-open")) close();
    });
  }

  /* ------------------------------------------------------------------------
     Animações de entrada
     ------------------------------------------------------------------------ */
  function initReveal(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-stagger]").forEach(function (group) {
      group.querySelectorAll(":scope > .reveal").forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", (i * 0.08).toFixed(2) + "s");
      });
    });
    const items = scope.querySelectorAll(".reveal:not(.is-visible)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------------
     Fotos da equipe: fallback para iniciais
     ------------------------------------------------------------------------ */
  function initAvatars() {
    document.querySelectorAll("img[data-avatar]").forEach(function (img) {
      function fail() { img.closest(".avatar").classList.add("is-missing"); img.remove(); }
      if (img.complete && img.naturalWidth === 0) fail();
      else img.addEventListener("error", fail);
    });
  }

  /* ------------------------------------------------------------------------
     Inicialização
     ------------------------------------------------------------------------ */
  renderHeader();
  renderFooter();
  renderWhatsAppFloat();
  renderIcons();
  applyConfig();
  initHeaderScroll();
  initMobileMenu();
  initReveal();
  initAvatars();
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(Math.max(2026, new Date().getFullYear()));
  });

  // API mínima para os scripts de página (portfólio, contato)
  window.DL = {
    icon: icon,
    waLink: waLink,
    waNumber: waNumber,
    applyConfig: applyConfig,
    renderIcons: renderIcons,
    initReveal: initReveal
  };
})();
