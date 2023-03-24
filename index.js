const navBtn = document.querySelector(".navigation__button");
const mobileNav = document.querySelector(".mobile__navigation");

navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");

    navBtn.innerHTML = mobileNav.classList.contains("active") ? "Close" : "Menu";
})

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".js-preloader__heading", {
    y: 50,
    opacity: 0,
    duration: .6,
    delay: 1
})

tl.to(".js-preloader__bar", {
    width: "35%",
    ease: "power4.in",
    duration: 1.2
})

tl.to(".js-preloader", {
    y: "-100vh",
    duration: 1.5,
    delay: .7,
    ease: "power4.inOut"
})

tl.from(".js-navigation", {
    y: -80,
    duration: .8,
    stagger: 0.1,
    ease: "power2.inOut"
})

tl.from(".container__image--item", {
    y: 40,
    opacity: 0,
    ease: "power4.inOut",
    stagger: .1,
})

// About page animation

const aboutTl = gsap.timeline();

aboutTl.from(".js-about-nav", {
    y: -80,
    duration: .8,
    stagger: 0.1,
    delay: .5,
    ease: "power2.inOut"
})

aboutTl.from(".white-overlay", {
    height: "100%",
    duration: 0.8,
    ease: "power2.inOut"
})

aboutTl.from(".js-about-content", {
    opacity: 0,
    duration: 0.8,
    ease: "power4.inOut",
    stagger: 0.1
})

const container = document.querySelector(".about__container--image");
const image = document.querySelector(".about__image");

container.addEventListener("mousemove", (e) => {
    const xPos = e.clientX / 5;
    const yPos = e.clientY / 5;
    
    image.style.transform = `translate(${xPos/2}px, ${yPos/2}px) scale(1.4)`;
})

container.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
})



