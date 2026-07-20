// ===============================
// LOADER
// ===============================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.opacity = "0";
        setTimeout(() => { loader.style.display = "none"; },600);
    }
});

// ===============================
// HAMBURGER MENU (mobile)
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle && navMenu){
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// ===============================
// TYPED TEXT
// ===============================
if(document.querySelector(".typing")){
new Typed(".typing",{
strings:["Frontend Developer","Web Designer","JavaScript Developer","BS Computer Science Student"],
typeSpeed:80,
backSpeed:50,
backDelay:1500,
loop:true
});
}

// ===============================
// SCROLL REVEAL
// ===============================
if(typeof ScrollReveal !== "undefined"){
ScrollReveal({distance:"80px",duration:1800,delay:200,reset:false});
ScrollReveal().reveal(".avatar-box",{origin:"top"});
ScrollReveal().reveal(".intro-box",{origin:"bottom"});
ScrollReveal().reveal(".title",{origin:"top"});
ScrollReveal().reveal(".card,.skill,.project,.contact",{origin:"bottom",interval:150});
}

// ===============================
// VANILLA TILT
// ===============================
if(typeof VanillaTilt !== "undefined"){
VanillaTilt.init(document.querySelectorAll(".skill,.project,.card"),{
max:12,speed:400,glare:true,"max-glare":0.3
});
}

// ===============================
// ACTIVE NAVBAR + close menu on click
// ===============================
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{
const top=section.offsetTop-150;
if(pageYOffset>=top){ current=section.getAttribute("id"); }
});
navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")==="#"+current){ link.classList.add("active"); }
});
});

// ===============================
// SMOOTH SCROLL
// ===============================
navLinks.forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();
const target=document.querySelector(this.getAttribute("href"));
target.scrollIntoView({behavior:"smooth"});
navMenu.classList.remove("show"); // mobile menu band ho jaye click ke baad
});
});

// ===============================
// HEADER EFFECT
// ===============================
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{
if(window.scrollY>80){
header.style.background="rgba(0,0,0,.45)";
header.style.backdropFilter="blur(20px)";
}else{
header.style.background="rgba(255,255,255,.06)";
}
});

// ===============================
// BUTTON HOVER
// ===============================
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mouseenter",()=>{ btn.style.transform="scale(1.05)"; });
btn.addEventListener("mouseleave",()=>{ btn.style.transform="scale(1)"; });
});

console.log("🚀 Premium Portfolio Loaded Successfully");