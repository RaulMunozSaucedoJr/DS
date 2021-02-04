! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {
        $(document).ready(function () {
            $(".fixed-top").click(function () {
                $(".menu").slideToggle(400)
            })
        }), window.addEventListener("scroll", () => {
            document.querySelector("#navbar").classList[window.scrollY > 50 ? "add" : "remove"]("hide")
        });
        const e = document.querySelector(".to-top");
        window.addEventListener("scroll", () => {
            window.pageYOffset > 300 ? e.classList.add("active") : e.classList.remove("active")
        });
    });
    
}();