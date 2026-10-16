/* ==========================================================================
   Datalyse — Portfólio: grade, filtros e modal
   Os itens vêm de js/portfolio-data.js (array PORTFOLIO).
   ========================================================================== */

(function () {
  "use strict";

  const grid = document.getElementById("portfolio-grid");
  const filtersEl = document.getElementById("portfolio-filters");
  const modal = document.getElementById("portfolio-modal");
  if (!grid || typeof PORTFOLIO === "undefined") return;

  const icon = window.DL ? window.DL.icon : function () { return ""; };

  const CATEGORIAS = [
    { id: "todos", label: "Todos" },
    { id: "dashboards", label: "Dashboards" },
    { id: "automacoes", label: "Automações" },
    { id: "aplicativos", label: "Aplicativos" },
    { id: "sites", label: "Sites" }
  ];

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Filtros ---------- */
  function renderFilters() {
    filtersEl.innerHTML = CATEGORIAS.map(function (c) {
      const count = c.id === "todos"
        ? PORTFOLIO.length
        : PORTFOLIO.filter(function (p) { return p.categoria === c.id; }).length;
      return '<li><button type="button" class="filter-btn" data-filter="' + c.id + '" aria-pressed="' + (c.id === "todos") + '">' +
        esc(c.label) + ' <span class="filter-btn__count">' + count + "</span></button></li>";
    }).join("");

    filtersEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      applyFilter(btn.dataset.filter);
    });
  }

  function applyFilter(cat) {
    filtersEl.querySelectorAll(".filter-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === cat));
    });
    let visible = 0;
    grid.querySelectorAll(".work-card").forEach(function (card) {
      const show = cat === "todos" || card.dataset.categoria === cat;
      card.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    const status = document.getElementById("portfolio-status");
    if (status) status.textContent = visible + (visible === 1 ? " projeto exibido" : " projetos exibidos");
  }

  /* ---------- Grade ---------- */
  function renderGrid() {
    grid.innerHTML = PORTFOLIO.map(function (p) {
      return (
        '<li class="work-card reveal" data-categoria="' + esc(p.categoria) + '">' +
          '<div class="work-card__media">' +
            '<img src="' + esc(p.imagem) + '" alt="" width="640" height="400" loading="lazy">' +
            (p.demonstrativo ? '<span class="demo-badge">Demonstrativo</span>' : "") +
          "</div>" +
          '<div class="work-card__body">' +
            '<span class="tag">' + esc(p.segmento) + "</span>" +
            "<h3>" + esc(p.titulo) + "</h3>" +
            "<p>" + esc(p.resumo) + "</p>" +
            '<span class="work-card__more" aria-hidden="true">Ver detalhes ' + icon("arrow-right") + "</span>" +
          "</div>" +
          '<button type="button" class="work-card__open" data-id="' + esc(p.id) + '" aria-haspopup="dialog">' +
            '<span class="sr-only">Ver detalhes: ' + esc(p.titulo) + "</span>" +
          "</button>" +
        "</li>"
      );
    }).join("");

    grid.addEventListener("click", function (e) {
      const btn = e.target.closest(".work-card__open");
      if (btn) openModal(btn.dataset.id, btn);
    });

    if (window.DL) window.DL.initReveal(grid);
  }

  /* ---------- Modal ---------- */
  let lastTrigger = null;

  function openModal(id, trigger) {
    const p = PORTFOLIO.find(function (item) { return item.id === id; });
    if (!p || !modal) return;
    lastTrigger = trigger || null;

    modal.querySelector("[data-modal-content]").innerHTML =
      '<div class="modal__media">' +
        '<img src="' + esc(p.imagem) + '" alt="' + esc("Imagem ilustrativa: " + p.titulo) + '" width="640" height="400">' +
        (p.demonstrativo ? '<span class="demo-badge">Dados demonstrativos</span>' : "") +
      "</div>" +
      '<div class="modal__body">' +
        "<div>" +
          '<span class="tag">' + esc(p.segmento) + "</span>" +
          '<h2 id="portfolio-modal-title">' + esc(p.titulo) + "</h2>" +
          "<p>" + esc(p.descricao) + "</p>" +
          '<ul class="chip-list" role="list" aria-label="Ferramentas">' +
            p.ferramentas.map(function (f) { return '<li class="chip">' + esc(f) + "</li>"; }).join("") +
          "</ul>" +
        "</div>" +
        "<div>" +
          "<h3>O que a solução faz</h3>" +
          '<ul class="check-list">' +
            p.recursos.map(function (r) { return "<li>" + icon("check") + "<span>" + esc(r) + "</span></li>"; }).join("") +
          "</ul>" +
          '<a class="btn btn--primary" style="margin-top:28px" href="#" data-wa data-wa-text="' +
            esc("Olá! Vi o projeto \"" + p.titulo + "\" no portfólio da Datalyse e gostaria de algo parecido para a minha empresa.") +
          '">' + icon("whatsapp") + "Quero algo parecido</a>" +
        "</div>" +
      "</div>";

    if (window.DL) window.DL.applyConfig(modal);
    modal.showModal();
    modal.querySelector(".modal__scroll").scrollTop = 0;
    modal.querySelector(".modal__close").focus();
    if (history.replaceState) history.replaceState(null, "", "#" + p.id);
  }

  function closeModal() {
    if (modal.open) modal.close();
  }

  if (modal) {
    modal.addEventListener("close", function () {
      if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
      if (lastTrigger) lastTrigger.focus();
    });
    modal.querySelector(".modal__close").addEventListener("click", closeModal);
    // Clique fora do conteúdo (no backdrop) fecha
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }

  /* ---------- Inicialização ---------- */
  renderFilters();
  renderGrid();
  applyFilter("todos");

  // Abre direto pelo link (ex.: portfolio.html#dashboard-hospedagem)
  const hash = decodeURIComponent(location.hash.slice(1));
  if (hash && PORTFOLIO.some(function (p) { return p.id === hash; })) {
    const trigger = grid.querySelector('.work-card__open[data-id="' + hash + '"]');
    openModal(hash, trigger);
  }
})();
