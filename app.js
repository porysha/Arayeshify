//navbar

let menuBtn = document.querySelector(".menu-outline-icon");
let menu = document.querySelector(".menu");
let menuCloseBtn = document.querySelector(".menu-closeline-icon");
let menuOpenBtn = document.querySelector(".menu-outline-icon");
function openHandeler(e) {
    menu.style.opacity = "100%";
    menu.style.display = "flex";
    // menu.style.visibility = "visible";
    menuCloseBtn.style.display = "inline-block";
    menuOpenBtn.style.display = "none";
}
function closeHandelar(e) {
    menu.style.opacity = "0%";
    menu.style.display = "none";
    // menu.style.visibility = "hidden";
    menuCloseBtn.style.display = "none";
    menuOpenBtn.style.display = "inline-block";
}
menuBtn.addEventListener("click", openHandeler);
menuCloseBtn.addEventListener("click", closeHandelar);

//sticky
let header = document.querySelector("header");
let heroSection = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
    function (enteris) {
        const ent = enteris[0];
        console.log(ent);
        if (ent.isIntersecting == false) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
    }
);
obs.observe(heroSection);
