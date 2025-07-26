
document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for the team intro
    document.querySelector('.team-intro h1').style.opacity = '1';
    document.querySelector('.team-intro h1').style.transform = 'translateY(0)';
    document.querySelector('.team-intro p').style.opacity = '1';
    document.querySelector('.team-intro p').style.transform = 'translateY(0)';

    // Slide-up effect for team members
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    teamMembers.forEach(member => observer.observe(member));
});


function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

function closeMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.remove("active");
}




document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for the team intro
    document.querySelector('.team-intro h1').style.opacity = '1';
    document.querySelector('.team-intro h1').style.transform = 'translateY(0)';
    document.querySelector('.team-intro p').style.opacity = '1';
    document.querySelector('.team-intro p').style.transform = 'translateY(0)';

    // Slide-up effect for team members
    const teamMembers = document.querySelectorAll('.team-member');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    teamMembers.forEach(member => observer.observe(member));

    // Fade-in effect for footer
    const footer = document.querySelector('footer');
    const footerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.style.opacity = '1';
                footer.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    footerObserver.observe(footer);
});

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}
