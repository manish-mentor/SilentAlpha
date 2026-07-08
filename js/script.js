// ===========================
// SILENTALPHA FINAL SCRIPT
// ===========================

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.remove();
            }, 800);

        }, 800);
    }
});


// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (cursor) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});


// TYPING EFFECT

const words = [

"Future Full Stack Developer",

"Frontend Developer",

"UI / UX Designer",

"JavaScript Developer",

"Computer Science Student"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex == 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// SCROLL REVEAL

const sections = document.querySelectorAll("section");

function reveal() {

    sections.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            sec.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// COUNTER

document.querySelectorAll(".counter").forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    };

    update();

});


// TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}


// SMOOTH NAV

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// PARTICLES

if (typeof particlesJS !== "undefined") {

particlesJS("particles-js",{

particles:{

number:{

value:100,

density:{

enable:true,

value_area:900

}

},

color:{

value:"#00E5FF"

},

shape:{

type:"circle"

},

opacity:{

value:.5

},

size:{

value:3,

random:true

},

line_linked:{

enable:true,

distance:150,

color:"#00E5FF",

opacity:.25,

width:1

},

move:{

enable:true,

speed:2

}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{

enable:true,

mode:"grab"

},

onclick:{

enable:true,

mode:"push"

}

},

modes:{

grab:{

distance:170,

line_linked:{

opacity:1

}

},

push:{

particles_nb:5

}

}

},

retina_detect:true

});

}


// ACTIVE NAV

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

