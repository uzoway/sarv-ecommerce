// Product page 

const sizeBtn = document.querySelectorAll(".button__container--btn");

function toggleBg(){
    sizeBtn.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
}

sizeBtn.forEach(btn => {
    btn.addEventListener("click", toggleBg)
})


const accordionPara = document.querySelector(".accordion__paragraph");
const accordionContent = document.querySelector(".accordion__content");
const accordionSymbol = document.querySelector(".accordion__symbol");

accordionPara.addEventListener("click", () => {
    accordionContent.classList.toggle("accordion__height");
    accordionSymbol.classList.toggle("rotate__accordion");
})


const addCart = document.querySelector(".add__cart");
const cartNumber = document.querySelector(".cart__number");

let num = 1;

addCart.addEventListener("click", () => {
    cartNumber.innerText = num++;
    addCart.classList.toggle("cartanimate");
})




gsap.registerPlugin(ScrollTrigger);

const ptl = gsap.timeline();

ptl.from(".product-navigation", {
    y: -80,
    delay: .5,
    duration: .8,
    stagger: 0.1,
    ease: "power2.inOut"
})

ptl.from(".product__container > *", {
    opacity: 0,
    y: 40,
    stagger: 0.4
})


