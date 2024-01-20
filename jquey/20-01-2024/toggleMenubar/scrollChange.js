// target element => header 
// perform => window 

$(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("header").addClass("headerchange")
        } else {
            $("header").removeClass("headerchange")
        }
    })
})