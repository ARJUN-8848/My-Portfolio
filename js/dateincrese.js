const startYear = 2023; // Change this to the year you started working
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;

// Update the span with the calculated experience
document.getElementById('experience-years').textContent = experienceYears;