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
    let navList = document.querySelector(".nav__list");
    let navMenuLinkIcon = menuIcon.querySelector(".nav__menu-link-icon");
    menuIcon.addEventListener("click", (event) => {
        // slide down nav list
        navList.classList.toggle("nav__list--active");

        // toggle icon class name
        // <i class="ri-menu-line"></i>
        // <i class="ri-close-line"></i>
        if (navMenuLinkIcon.classList.contains("ri-menu-line")) {
            navMenuLinkIcon.classList.remove("ri-menu-line");
            navMenuLinkIcon.classList.add("ri-close-line");
        } else if (navMenuLinkIcon.classList.contains("ri-close-line")) {
            navMenuLinkIcon.classList.remove("ri-close-line");
            navMenuLinkIcon.classList.add("ri-menu-line");
        }
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