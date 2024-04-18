// nav menu

let ham = document.querySelector(".menuicon");
let nav_item = document.querySelector(".nav_items");
let links = document.querySelectorAll(".nav_link");
let body = document.body;

ham.addEventListener("click", () => {
    if (nav_item.classList.contains("lg_view")) {
        nav_item.classList.toggle("show");
        if (nav_item.classList.contains("show")) {
            body.style.overflow = "hidden";
            if (nav_item.classList.contains("lg_view")) {
                links.forEach(itm => {
                    itm.addEventListener("click", () => {
                        ham.classList.add("position-fixed");
                        ham.style.right = "12px";
                        ham.style.top = "17px";
                    });
                });
            }
        } else {
            body.style.overflow = "auto";
            ham.classList.remove("position-fixed");
            ham.style.right = "0";
            ham.style.top = "0";
        }
    }
});

// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;
scroll_btn.classList.add("d-none");

window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// progress

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


let preloader = document.querySelector(".preloader");

setTimeout(() => {
    preloader.classList.add("-top-105");
}, 3000);