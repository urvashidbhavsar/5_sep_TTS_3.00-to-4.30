// target element => header 
// perform => window 

let newheader = document.querySelector("header");
window.addEventListener("scroll", function () {
    let current = window.scrollY;
    if (current > 0) {
        newheader.classList.add("headerchange")
    } else {
        newheader.classList.remove("headerchange")
    }
})