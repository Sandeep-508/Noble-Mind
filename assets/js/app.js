let ham = document.querySelector(".menuicon");
let nav_item = document.querySelector(".nav_items");
let body = document.body;

ham.addEventListener("click", () => {
    if (nav_item.classList.contains("lg_view")) {
        nav_item.classList.toggle("show");
        if (nav_item.classList.contains("show")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }
});
