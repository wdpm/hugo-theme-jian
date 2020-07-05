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

// back to top show or hide
domReady(() => {
    let backToTop = document.querySelector("#backToTop");
    let docWidth = document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth;
    // only apply to wide screen > 480px
    if (docWidth > 480) {
        window.addEventListener("scroll", function () {
            let st = window.scrollY;
            if (st > 30) {
                return backToTop.style.display = "block";
            } else {
                return backToTop.style.display = "none";
            }
        })
    }
})