// const sideBtn = document.querySelector(".main__action");
const closeBtn = document.querySelector(".side__action");
const mains = document.querySelector(".main");
const sideBtn = document.querySelector(".main__action");

sideBtn.addEventListener("click", function () {
   mains.classList.toggle("active");
});

closeBtn.addEventListener("click", function () {
    mains.classList.add("active");
});

// const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");
//
// navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    //console.log(links.classList.contains("nav-links-hero"));
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }
//     links.classList.toggle("show-links");
// });