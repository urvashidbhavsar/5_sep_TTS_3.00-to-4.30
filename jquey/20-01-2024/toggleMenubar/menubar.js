// target element => nav class
// perform element => btn class/id

$(document).ready(function () {
    $("#btn").click(function () {
        $(".nav").toggleClass("navigation")
    })
})