const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links-custom');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// JavaScript code to update the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
    