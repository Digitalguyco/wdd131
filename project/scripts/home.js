
const excerciseItems = [
    { src: 'images/lunge.jpg', name: 'Lunge', duration: 30},
    { src: 'images/pushUps.jpeg', name: 'PushUps', duration: 50},
    { src: 'images/squat.jpg', name: 'Squat', duration: 30},
    { src: 'images/bycircle.webp', name: 'Bycycle Crunces', duration: 50},
    { src: 'images/superHero.jpeg', name: 'Superheroes', duration: 60},
    { src: 'images/jump.webp', name: 'Jumping', duration: 50},
];

const DailyMealItems = [
    { src: 'images/breakfast.jpeg',  type: 'BreakFast', dishName: 'Wholegrain breakfast cereal, with reduced fat milk' },
    { src: 'images/lunch.jpg', type: 'Lunch', dishName: 'Sandwich with salad and chicken' },
    { src: 'images/dinner.jpg', type: 'Dinner', dishName: 'Pasta with beef mince and red kidney beans, tomato and green salad with olive oil and vinegar dressing' },
];


const dailyMealContainer = document.getElementById('dailyMeal');
const dailyExcerCiseContainer = document.getElementById('dailyExcercise');


excerciseItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.name;

    const name = document.createElement('p');
    name.textContent = item.name;
    const duration = document.createElement('p');
    duration.textContent = `Duration:- ${item.duration}Secs`;

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(duration);
    dailyExcerCiseContainer.appendChild(div);
});

DailyMealItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.dishName;

    const type = document.createElement('p');
    type.textContent = item.type;
    const dishName = document.createElement('p');
    dishName.textContent = item.dishName;

    div.appendChild(img);
    div.appendChild(type);
    div.appendChild(dishName);
    dailyMealContainer.appendChild(div);
});



const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const currentDate = new Date();
document.getElementById("currentDate").textContent = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
document.getElementById("currentDate2").textContent = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

const socialMediaLinks = [
    { href: 'https://facebook.com', src: 'images/facebook.png', alt: 'Facebook' },
    { href: 'https://twitter.com', src: 'images/twitter.png', alt: 'Twitter' },
    { href: 'https://instagram.com', src: 'images/instagram.png', alt: 'Instagram' }
];




document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburgerMenu.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});