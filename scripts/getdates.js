// Set current year
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Set last modified date
const lastModifiedP = document.getElementById('lastModified');
lastModifiedP.textContent = `Last updated: ${document.lastModified}`;
