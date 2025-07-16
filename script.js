// 🌟 Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// 🔥 Sticky Header Effect on Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 🎠 Auto Image Slider for Gallery
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

setInterval(showSlides, 3000); // Change image every 3 seconds

// ✅ Form Validation for Contact Section
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ All fields are required!");
        return false;
    }

    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        alert("📧 Please enter a valid email address!");
        return false;
    }

    alert("✅ Message sent successfully!");
    return true;
}

// 🌙 Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙 Toggle Dark Mode";
darkModeToggle.style.cssText = "position:fixed; bottom:10px; right:10px; padding:10px; cursor:pointer;";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 🕶️ Apply Dark Mode Styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background: #121212 !important;
        color: white !important;
    }
    .dark-mode header {
        background: black !important;
    }
    .dark-mode nav ul li a {
        color: yellow !important;
    }
    .dark-mode .btn {
        background: yellow !important;
        color: black !important;
    }
`;
document.head.appendChild(darkModeStyles);

// 📌 Dynamic Content Loading (Example: Load additional information when scrolling)
window.addEventListener("scroll", function () {
    const researchSection = document.getElementById("research");
    if (researchSection.getBoundingClientRect().top < window.innerHeight) {
        researchSection.innerHTML += <p>🚀 HAL's R&D team is working on AI-driven avionics and autonomous aircraft technologies.</p>;
    }
});
