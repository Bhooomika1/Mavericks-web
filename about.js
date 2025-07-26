document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right");

    function checkVisibility() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.style.animationPlayState = "running";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
