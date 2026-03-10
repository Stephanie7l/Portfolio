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
