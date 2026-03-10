document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

function enviarWhatsApp(e) {
  e.preventDefault();

  const nome = (document.getElementById("nome")?.value || "").trim();
  const servico = document.getElementById("servico")?.value || "";
  const mensagem = (document.getElementById("mensagem")?.value || "").trim();

  const texto =
    `Olá! Meu nome é ${nome || "[seu nome]"}. ` +
    `Gostaria de solicitar um orçamento para: ${servico}.\n\n` +
    `Detalhes do projeto:\n${mensagem || "[descreva objetivo, prazo e referências]"}`;

  const url = `https://wa.me/5531985499733?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
