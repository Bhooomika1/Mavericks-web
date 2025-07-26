function joinTeam() {
    alert("Thank you for your interest! We will get back to you soon.");
}

// Function to toggle active class and remove blur
function setActive(link) {
    const links = document.querySelectorAll('nav a');
    links.forEach(a => {
        a.classList.remove('active');
        a.classList.remove('blur'); // Remove blur from all links
    });
    link.classList.add('active');
}

// Toggle mobile menu when hamburger icon is clicked
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("active");
}

// Close mobile menu when a nav link is clicked
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            const navMenu = document.querySelector("nav ul");
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
        });
    });
});


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
