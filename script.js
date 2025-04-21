// Scroll to specific section
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Dynamic typing effect for "Mon Rôle"
document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.querySelector(".dynamic-text");
    const roles = [
        "un technicien réseau",
        "un développeur passionné",
        "un expert en informatique",
        "un consultant fiable"
    ];

    let index = 0;

    const updateText = () => {
        dynamicText.textContent = roles[index];
        index = (index + 1) % roles.length;
    };

    setInterval(updateText, 3000); // Change toutes les 3 secondes
    updateText(); // Initialisation
});