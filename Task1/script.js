/* ==========================================
   TYPING EFFECT
========================================== */

const words = [
  "NovaUI",
  "Modern Websites",
  "Premium UI",
  "Glassmorphism",
  "Future Design"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

}


/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme")=="light"){

document.body.classList.add("light");

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

}else{

localStorage.setItem("theme","dark");

}

});


/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor=document.querySelector(".cursor");
const cursor2=document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursor2.style.left=e.clientX+"px";
cursor2.style.top=e.clientY+"px";

});
/* ==========================================
   PARTICLES JS
========================================== */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#00D4FF"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6C63FF",
      opacity: 0.4
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});


/* ==========================================
   TESTIMONIAL SLIDER
========================================== */

const testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showTestimonial() {

    testimonials.forEach(item => {

        item.classList.remove("active");

    });

    testimonials[currentSlide].classList.add("active");

    currentSlide++;

    if (currentSlide >= testimonials.length) {

        currentSlide = 0;

    }

}

if(testimonials.length > 0){

showTestimonial();

setInterval(showTestimonial,3000);

}


/* ==========================================
   CONTACT FORM
========================================== */

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill all fields.");

return;

}

alert("✅ Message Sent Successfully!");

form.reset();

});

}
/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }

});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    const progress = document.getElementById("progressBar");

    if (progress) {
        progress.style.width = scrolled + "%";
    }

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

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


/* ==========================================
   NAVBAR ACTIVE LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

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


/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        circle.style.left = e.clientX - rect.left + "px";

        circle.style.top = e.clientY - rect.top + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%c🚀 Welcome to NovaUI",
"color:#00D4FF;font-size:22px;font-weight:bold;");

console.log("%cDesigned with ❤️ using HTML, CSS & JavaScript",
"color:#6C63FF;font-size:16px;");