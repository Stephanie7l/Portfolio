document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
});

function enviarWhatsApp(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto =
    `Olá, meu nome é ${nome}. Gostaria de solicitar um orçamento para ${servico}.\n\n` +
    `Detalhes do projeto:\n${mensagem}`;

  const url = `https://wa.me/5531985499733?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

// ===== Menu Hambúrguer =====
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-navigation");

  if (!toggle || !nav) return;

  // cria overlay (não depende de mexer no HTML)
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  function openMenu() {
    nav.classList.add("is-open");
    toggle.classList.add("is-open");
    overlay.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    document.documentElement.style.overflow = "hidden"; // trava scroll do fundo
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    overlay.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.documentElement.style.overflow = "";
  }

  function isOpen() {
    return nav.classList.contains("is-open");
  }

  toggle.addEventListener("click", function () {
    if (isOpen()) closeMenu();
    else openMenu();
  });

  // fecha clicando no overlay
  overlay.addEventListener("click", closeMenu);

  // fecha ao clicar em qualquer link do menu
  nav.addEventListener("click", function (e) {
    const a = e.target.closest("a");
    if (!a) return;
    closeMenu();
  });

  // fecha com ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) closeMenu();
  });

  // se voltar para desktop (resize), fecha o menu
  window.addEventListener("resize", function () {
    if (window.innerWidth > 560 && isOpen()) closeMenu();
  });
})();
