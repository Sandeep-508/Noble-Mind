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
