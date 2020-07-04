// refer https://stackoverflow.com/questions/2304941/what-is-the-non-jquery-equivalent-of-document-ready
function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete") {
        fn();
    }
}

domReady(() => {
    let menuIcon = document.querySelector("#menuIcon");
    let navBody = document.querySelector(".nav__body");
    menuIcon.addEventListener("click", (event) => {
        console.log("toggle");
        // navBody.classList.toggle("active");
    })
})

// // back-to-top
// $(document).ready((function (_this) {
//     return function () {
//         let bt
//         bt = $('#back_to_top')
//         if ($(document).width() > 480) {
//             $(window).scroll(function () {
//                 let st
//                 st = $(window).scrollTop()
//                 if (st > 30) {
//                     return bt.css('display', 'block')
//                 } else {
//                     return bt.css('display', 'none')
//                 }
//             })
//             return bt.click(function () {
//                 $('body,html').animate({
//                     scrollTop: 0,
//                 }, 800)
//                 return false
//             })
//         }
//     }
// })(this))