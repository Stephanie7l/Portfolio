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
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        body.style.overflow = isOpen ? "hidden" : "";
    }

    if (toggle) {
        toggle.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);
        
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (nav.classList.contains("is-open")) toggleMenu();
            });
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && nav.classList.contains("is-open")) toggleMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900 && nav.classList.contains("is-open")) {
                nav.classList.remove("is-open");
                toggle.classList.remove("is-open");
                overlay.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                body.style.overflow = "";
            }
        });
    }

    // 3. Fade-in ao rolar
    const fadeEls = document.querySelectorAll(".fade-in");
    if ("IntersectionObserver" in window && fadeEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, i * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        fadeEls.forEach(el => observer.observe(el));
    } else {
        fadeEls.forEach(el => el.classList.add("visible"));
    }

    // 4. FAQ Accordion
    document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.closest(".faq-item");
            const isOpen = item.classList.contains("is-open");
            // Fecha todos
            document.querySelectorAll(".faq-item.is-open").forEach(open => {
                open.classList.remove("is-open");
                open.querySelector(".faq-question").setAttribute("aria-expanded", "false");
            });
            // Abre o clicado (se estava fechado)
            if (!isOpen) {
                item.classList.add("is-open");
                btn.setAttribute("aria-expanded", "true");
            }
        });
    });

    // 5. WhatsApp
    function enviarWhatsApp(e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = `Olá, meu nome é ${nome}. Orçamento para: ${servico}.\n\nDetalhes: ${mensagem}`;
        window.open(`https://wa.me/5531985499733?text=${encodeURIComponent(texto)}`, "_blank");
    }
});

// Menu Mobile
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-navigation");
const navOverlay = document.querySelector(".nav-overlay");

if (!navToggle || !primaryNav || !navOverlay) return;

const setMenuState = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    primaryNav.classList.toggle("active", open);
    navOverlay.classList.toggle("active", open);
    document.body.classList.toggle("menu-open", open);
};

navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

navOverlay.addEventListener("click", () => setMenuState(false));

primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
});
