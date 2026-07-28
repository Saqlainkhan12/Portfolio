// ======================================================
// LOADER
// ======================================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

// ======================================================
// MOUSE GLOW
// ======================================================

const glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ======================================================
// MOBILE MENU
// ======================================================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}

// ======================================================
// CLOSE MENU AFTER CLICK
// ======================================================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});

// ======================================================
// TYPED TEXT
// ======================================================

if (document.querySelector(".typing")) {

    new Typed(".typing", {

        strings: [

            "Frontend Developer",

            "Web Designer",

            "JavaScript Developer",

            "Python Programmer",

            "Machine Learning Student",

            "Creative Coder"

        ],

        typeSpeed: 80,

        backSpeed: 45,

        backDelay: 1500,

        startDelay: 300,

        loop: true,

        smartBackspace: true

    });

}

// ======================================================
// BUTTON HOVER EFFECT
// ======================================================

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// ======================================================
// SOCIAL ICON EFFECT
// ======================================================

document.querySelectorAll(".social a").forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-8px) scale(1.15)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0px) scale(1)";

    });

});

console.log("✅ Portfolio Loaded Successfully");
// ======================================================
// SCROLL REVEAL
// ======================================================

if (typeof ScrollReveal !== "undefined") {

    const sr = ScrollReveal({

        distance: "80px",

        duration: 1800,

        delay: 200,

        reset: false,

        easing: "ease"

    });

    sr.reveal(".avatar-box", {
        origin: "left"
    });

    sr.reveal(".intro-box", {
        origin: "right"
    });

    sr.reveal(".title", {
        origin: "top"
    });

    sr.reveal(".card", {
        origin: "bottom"
    });

    sr.reveal(".skill", {
        origin: "bottom",
        interval: 120
    });

    sr.reveal(".service", {
        origin: "bottom",
        interval: 120
    });

    sr.reveal(".project", {
        origin: "bottom",
        interval: 120
    });

    sr.reveal(".contact", {
        origin: "bottom"
    });

    sr.reveal(".hero-stats div", {
        origin: "bottom",
        interval: 100
    });

}

// ======================================================
// VANILLA TILT
// ======================================================

if (typeof VanillaTilt !== "undefined") {

    VanillaTilt.init(

        document.querySelectorAll(

            ".skill,.service,.project,.card"

        ),

        {

            max: 12,

            speed: 450,

            glare: true,

            "max-glare": 0.25,

            scale: 1.02

        }

    );

}

// ======================================================
// ACTIVE NAVBAR
// ======================================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 170;

        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ======================================================
// SMOOTH SCROLL
// ======================================================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================================================
// IMAGE HOVER
// ======================================================

const profileImage = document.querySelector(".circle img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.transform = "scale(1.08) rotate(2deg)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform = "scale(1) rotate(0deg)";

    });

}

// ======================================================
// HERO FLOATING EFFECT
// ======================================================

const avatar = document.querySelector(".avatar-box");

window.addEventListener("mousemove", (e) => {

    if (!avatar) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    avatar.style.transform = `translate(${x}px, ${y}px)`;

});

console.log("✅ Scroll Reveal Ready");
// ======================================================
// HEADER SCROLL EFFECT
// ======================================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,10,25,.85)";
        header.style.backdropFilter = "blur(25px)";
        header.style.boxShadow = "0 10px 35px rgba(0,217,255,.15)";

    } else {

        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";

    }

});

// ======================================================
// SCROLL PROGRESS BAR
// ======================================================

let progressBar = document.getElementById("progressBar");

if (!progressBar) {

    progressBar = document.createElement("div");

    progressBar.id = "progressBar";

    document.body.appendChild(progressBar);

}

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ======================================================
// SCROLL TO TOP BUTTON
// ======================================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

        topBtn.style.opacity = "1";

    } else {

        topBtn.style.opacity = "0";

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ======================================================
// COUNTER ANIMATION
// ======================================================

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 80);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

// ======================================================
// START COUNTER WHEN VISIBLE
// ======================================================

const statsSection = document.querySelector("#stats");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!statsSection || counterStarted) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 120) {

        runCounter();

        counterStarted = true;

    }

});

// ======================================================
// NAV LINK HOVER EFFECT
// ======================================================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0px)";

    });

});

// ======================================================
// CARD HOVER SHADOW
// ======================================================

document.querySelectorAll(".skill,.service,.project").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 20px 40px rgba(0,217,255,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});

console.log("✅ Scroll Effects Loaded");
// ======================================================
// PARTICLES BACKGROUND
// ======================================================

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#00d9ff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#00d9ff",

                opacity: 0.3,

                width: 1

            },

            move: {

                enable: true,

                speed: 2,

                direction: "none",

                random: false,

                straight: false,

                out_mode: "out"

            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {

                    enable: true,

                    mode: "grab"

                },

                onclick: {

                    enable: true,

                    mode: "push"

                }

            },

            modes: {

                grab: {

                    distance: 180,

                    line_linked: {

                        opacity: 1

                    }

                },

                push: {

                    particles_nb: 4

                }

            }

        },

        retina_detect: true

    });

}

// ======================================================
// FLOATING ANIMATION
// ======================================================

document.querySelectorAll(".skill,.project,.service").forEach((card, index) => {

    card.style.animation = `floatAnimation 4s ease-in-out ${index * 0.2}s infinite`;

});

// ======================================================
// PARALLAX EFFECT
// ======================================================

window.addEventListener("mousemove", (e) => {

    const blobs = document.querySelectorAll(".blob");

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 10;

        const x = (window.innerWidth - e.pageX * speed) / 250;

        const y = (window.innerHeight - e.pageY * speed) / 250;

        blob.style.transform = `translate(${x}px, ${y}px)`;

    });

});

// ======================================================
// AUTO YEAR
// ======================================================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ======================================================
// IMAGE LAZY EFFECT
// ======================================================

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("loading", "lazy");

});

// ======================================================
// DISABLE RIGHT CLICK (OPTIONAL)
// ======================================================

// document.addEventListener("contextmenu", e => e.preventDefault());

// ======================================================
// DISABLE IMAGE DRAG
// ======================================================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("dragstart", e => {

        e.preventDefault();

    });

});

// ======================================================
// WINDOW RESIZE
// ======================================================

window.addEventListener("resize", () => {

    console.log("Screen Width :", window.innerWidth);

});

// ======================================================
// FLOAT KEYFRAMES
// ======================================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatAnimation{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-10px);

}

100%{

transform:translateY(0px);

}

}

`;

document.head.appendChild(style);

// ======================================================
// PORTFOLIO READY
// ======================================================

console.log("%c🚀 Premium Portfolio Ready",
"color:#00d9ff;font-size:18px;font-weight:bold;");

console.log("%cDesigned By Saqlain Khan",
"color:#ffffff;font-size:14px;");
