
// ========================================
// S&SB PREMIUM WEBSITE
// JAVASCRIPT INTERACTIONS
// ========================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// 2. SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


// 3. HERO IMAGE MOUSE PARALLAX EFFECT

const heroImage = document.getElementById("heroImage");

const heroVisual = document.querySelector(".hero-visual");


const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


if (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !prefersReducedMotion
) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = heroVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 70;

        const rotateX = (centerY - y) / 70;


        heroImage.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.015)
        `;

    });


    heroVisual.addEventListener("mouseleave", () => {

        heroImage.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

}


// 4. SERVICE SELECTION

document.querySelectorAll("[data-interest]").forEach(link => {

    link.addEventListener("click", () => {

        const selectedService = link.dataset.interest;

        const serviceDropdown = document.getElementById("service");

        serviceDropdown.value = selectedService;

    });

});


// 5. ENQUIRY FORM DEMO

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const service = document.getElementById("service").value;

    const formNote = document.getElementById("formNote");


    formNote.textContent =

        `Thank you, ${name}! Your ${service} enquiry has been demonstrated successfully. This demo does not send or store data.`;


    enquiryForm.reset();

});


// 6. AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 7. ACTIVE NAVIGATION ON SCROLL

const sections = document.querySelectorAll(
    "main section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-link"
);


const activeObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {

                    const isActive =
                        link.getAttribute("href") ===
                        `#${entry.target.id}`;

                    link.classList.toggle(
                        "active",
                        isActive
                    );

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach(section => {

    activeObserver.observe(section);

});


// 8. HEADER SCROLL EFFECT

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ========================================
// END OF S&SB JAVASCRIPT
// ========================================
