document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");
});

// Job Filtering Function
function filterJobs() {
    let searchInput = document.getElementById("searchJob").value.toLowerCase();
    let categoryFilter = document.getElementById("jobCategory").value;
    let jobCards = document.querySelectorAll(".job-card");
    
    jobCards.forEach(job => {
        let title = job.querySelector("h3").innerText.toLowerCase();
        let category = job.getAttribute("data-category");
        
        if ((title.includes(searchInput) || searchInput === "") && (category === categoryFilter || categoryFilter === "all")) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

// Apply Now Function
function applyNow(jobTitle) {
    document.getElementById("applicantJob").value = jobTitle;
    document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
}

// Form Validation
function validateApplicationForm() {
    let name = document.getElementById("applicantName").value.trim();
    let email = document.getElementById("applicantEmail").value.trim();
    let message = document.getElementById("applicantMessage").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    alert("Application submitted successfully!");
    return true;
}

// Email Validation
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
