document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = document.querySelector('input[name="activity"]:checked').value;

    // Check for valid inputs
    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert('Please enter valid values for age, height, and weight.');
        return;
    }

    // Calculate Basal Metabolic Rate (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate daily calorie burn based on activity level
    let calories;
    switch (activity) {
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'light':
            calories = bmr * 1.375;
            break;
        case 'moderate':
            calories = bmr * 1.55;
            break;
        case 'very':
            calories = bmr * 1.725;
            break;
    }

    // Display the result
    document.getElementById('result').innerText = `You burn approximately ${Math.round(calories)} calories per day.`;
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburgerMenu.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;



const socialMediaLinks = [
    { href: 'https://facebook.com', src: 'images/facebook.png', alt: 'Facebook' },
    { href: 'https://twitter.com', src: 'images/twitter.png', alt: 'Twitter' },
    { href: 'https://instagram.com', src: 'images/instagram.png', alt: 'Instagram' }
];