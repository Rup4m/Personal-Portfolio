document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for navbar height
                    behavior: "smooth"
                });

                // Close the menu on mobile after clicking a link
                navMenu.classList.remove("show");
            }
        });
    });

    // Toggle menu on click
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
