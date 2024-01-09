// target element => nav class
// perform element => btn class/id

function ToggleMenu() {
    let menu = document.querySelector(".menubar")
    menu.classList.add("menubar-new")
}
function CloseMenu() {
    let menu = document.querySelector(".menubar")
    menu.classList.remove("menubar-new")
}