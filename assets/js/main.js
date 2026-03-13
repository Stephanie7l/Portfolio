document.addEventListener("DOMContentLoaded", () => {
    // 1. Ano Automático
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Menu Mobile
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#primary-navigation");
    const overlay = document.querySelector(".nav-overlay");
    const body = document.body;

    function toggleMenu() {
        const isOpen = nav.classList.toggle("is-open");
        toggle.classList.toggle("is-open");
        overlay.classList.toggle("is-open");
        body.style.overflow = isOpen ? "hidden" : ""; // Trava o scroll
    }

    if (toggle) {
        toggle.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);
        
        // Fecha ao clicar em links
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (nav.classList.contains("is-open")) toggleMenu();
            });
        });
    }
});

function enviarWhatsApp(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. Orçamento para: ${servico}.\n\nDetalhes: ${mensagem}`;
    window.open(`https://wa.me/5531985499733?text=${encodeURIComponent(texto)}`, "_blank");
}
