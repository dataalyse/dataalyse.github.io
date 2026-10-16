/* ==========================================================================
   Datalyse — Formulário de contato
   Envio padrão: abre o WhatsApp com a mensagem montada a partir dos campos.
   Sem backend. Alternativa com Formspree descrita em contato.html.
   ========================================================================== */

(function () {
  "use strict";

  const USAR_FORMSPREE = false; // true = envia para o endpoint definido no action do <form>

  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const statusText = status.querySelector("[data-status-text]");
  const fields = {
    nome: form.elements.nome,
    empresa: form.elements.empresa,
    segmento: form.elements.segmento,
    whatsapp: form.elements.whatsapp,
    email: form.elements.email,
    mensagem: form.elements.mensagem
  };

  /* ---------- Máscara simples de telefone: (24) 99999-9999 ---------- */
  fields.whatsapp.addEventListener("input", function () {
    let d = this.value.replace(/\D/g, "").slice(0, 11);
    if (d.length > 6) d = "(" + d.slice(0, 2) + ") " + d.slice(2, d.length - 4) + "-" + d.slice(-4);
    else if (d.length > 2) d = "(" + d.slice(0, 2) + ") " + d.slice(2);
    else if (d.length) d = "(" + d;
    this.value = d;
  });

  /* ---------- Validação ---------- */
  const rules = {
    nome: function (v) { return v.trim().length >= 2; },
    segmento: function (v) { return v !== ""; },
    whatsapp: function (v) { const n = v.replace(/\D/g, "").length; return n >= 10 && n <= 11; },
    email: function (v) { return v.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
    mensagem: function (v) { return v.trim().length >= 5; }
  };

  function validateField(name) {
    const el = fields[name];
    const ok = rules[name](el.value);
    el.closest(".field").classList.toggle("has-error", !ok);
    el.setAttribute("aria-invalid", String(!ok));
    return ok;
  }

  Object.keys(rules).forEach(function (name) {
    const el = fields[name];
    el.addEventListener("blur", function () { if (el.value) validateField(name); });
    el.addEventListener("input", function () {
      if (el.closest(".field").classList.contains("has-error")) validateField(name);
    });
    el.addEventListener("change", function () {
      if (el.closest(".field").classList.contains("has-error")) validateField(name);
    });
  });

  /* ---------- Mensagem ---------- */
  function buildMessage() {
    const v = function (k) { return fields[k].value.trim(); };
    const linhas = [
      "Olá, Datalyse! Vim pelo site.",
      "",
      "*Nome:* " + v("nome")
    ];
    if (v("empresa")) linhas.push("*Empresa:* " + v("empresa"));
    linhas.push("*Segmento:* " + v("segmento"));
    linhas.push("*WhatsApp:* " + v("whatsapp"));
    if (v("email")) linhas.push("*E-mail:* " + v("email"));
    linhas.push("", "*Mensagem:*", v("mensagem"));
    return linhas.join("\n");
  }

  function showStatus(text) {
    statusText.textContent = text;
    status.classList.add("is-visible");
    status.focus();
  }

  form.addEventListener("submit", function (e) {
    const invalid = Object.keys(rules).filter(function (name) { return !validateField(name); });
    if (invalid.length) {
      e.preventDefault();
      status.classList.remove("is-visible");
      fields[invalid[0]].focus();
      return;
    }

    if (USAR_FORMSPREE) {
      e.preventDefault();
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset();
          showStatus("Mensagem enviada! Retornaremos em breve.");
        })
        .catch(function () {
          showStatus("Não foi possível enviar agora. Tente pelo WhatsApp ou e-mail ao lado.");
        });
      return;
    }

    e.preventDefault();
    const url = window.DL ? window.DL.waLink(buildMessage()) : "#";
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // bloqueador de pop-up
    showStatus("Abrimos o WhatsApp com a sua mensagem pronta. Se ele não abriu, use o botão de WhatsApp ao lado.");
  });
})();
