// Get all the necessary elements from the HTML
const staffIcon = document.getElementById('staff1');
const salaryIcon = document.getElementById('salary1');
const optionI = document.getElementById('option');
const loginI = document.getElementById('login');

const staffPage = document.getElementById('staff-page');
const salaryPage = document.getElementById('salary-page');
const optionPage = document.getElementById('option-page');
const loginPage = document.getElementById('login-page');
// Get all the links in the navbar
const links = document.querySelectorAll('.navbar a');

// Define a function to handle the link click
function handleClick() {
  // Get the clicked link
  const clickedLink = this;
  // Remove the shadow from all links
  removeShadow();
  // Add the "clicked" class to the clicked link
  clickedLink.classList.add('clicked');
}

// Define a function to remove the "clicked" class from all links
function removeShadow() {
  links.forEach(link => {
    if (link.classList.contains('clicked')) {
      link.classList.remove('clicked');
    }
  });
}

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', handleClick);
});

// Add click event listeners to the staff and salary icons to show and hide the pages
staffIcon.addEventListener('click', function() {
  staffPage.classList.add('active');
  salaryPage.classList.remove('active');
  optionPage.classList.remove('active');
  loginPage.classList.remove('active');
});

salaryIcon.addEventListener('click', function() {
  salaryPage.classList.add('active');
  staffPage.classList.remove('active');
  optionPage.classList.remove('active');
  loginPage.classList.remove('active');
});

optionI.addEventListener('click', function() {
  optionPage.classList.add('active');
  staffPage.classList.remove('active');
  salaryPage.classList.remove('active');
  loginPage.classList.remove('active');
});

loginI.addEventListener('click', function() {
  loginPage.classList.add('active');
  staffPage.classList.remove('active');
  salaryPage.classList.remove('active');
  optionPage.classList.remove('active');
});

// Get references to the hamburger menu button, navigation menu, navigation links, and the switch button
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const switchButton = document.querySelector("#option-page .switch");

// Add click event listener to the hamburger menu button and each navigation link
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// Toggle the active class on the hamburger menu button and the navigation menu
// Also toggle the display of the switch button based on whether the navigation menu is active
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (switchButton) {
        switchButton.style.display = navMenu.classList.contains("active") ? "none" : "block";
    }
}

// Remove the active class from the hamburger menu button and the navigation menu
// Also make sure the switch button is always visible
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    if (switchButton) {
        switchButton.style.display = "block";
    }
}

// Check if the current page is the option page
function isOptionPage() {
  return document.body.classList.contains("option-page");
}

// Sample employee data
var employees = [
  {
    name: "John Doe",
    salary: 50000,
    frequency: "Monthly",
    deductions: 5000,
    bonuses: 2000
  },
  {
    name: "Jane Smith",
    salary: 75000,
    frequency: "Monthly",
    deductions: 10000,
    bonuses: 5000
  },
  {
    name: "Bob Johnson",
    salary: 60000,
    frequency: "Bi-Weekly",
    deductions: 6000,
    bonuses: 1000
  }
];

// Function to calculate total salary
function calculateTotal(salary, deductions, bonuses) {
  return salary - deductions + bonuses;
}

// Add employee data to table
$(document).ready(function() {
  for (var i = 0; i < employees.length; i++) {
    addEmployeeToTable(employees[i]);
  }
});

// Function to add employee data to table
function addEmployeeToTable(employee) {
  var table = $("#salary-table");
  var row = $("<tr></tr>");

  $("<td></td>").text(employee.name).appendTo(row);
  $("<td></td>").text("$" + employee.salary.toFixed(2)).appendTo(row);
  $("<td></td>").text(employee.frequency).appendTo(row);
  $("<td></td>").text("$" + employee.deductions.toFixed(2)).appendTo(row);
  $("<td></td>").text("$" + employee.bonuses.toFixed(2)).appendTo(row);

  var total = calculateTotal(employee.salary, employee.deductions, employee.bonuses);
  $("<td></td>").text("$" + total.toFixed(2)).appendTo(row);

var deleteBtn = $("<button>Delete</button>").attr("id", "delete-btn");
  
  deleteBtn.click(function() {
    row.remove();
  });
  $("<td></td>").append(deleteBtn).appendTo(row);

  row.appendTo(table.find("tbody"));
}

// Handle form submission
$("form").submit(function(event) {
  event.preventDefault();
  
  // Get form values
  var name = $("#name").val();
  var salary = parseFloat($("#salary").val());
  var frequency = $("#frequency").val();
  var deductions = parseFloat($("#deductions").val());
  var bonuses = parseFloat($("#bonuses").val());

  // Add employee to table
  var employee = {
    name: name,
    salary: salary,
    frequency: frequency,
    deductions: deductions,
    bonuses: bonuses
  };
  addEmployeeToTable(employee);

  // Clear form values
  $("form")[0].reset();
});

const toggleFormButton = document.getElementById('toggle-form');
const staffForm = document.getElementById('staff-form');

toggleFormButton.addEventListener('click', function() {
  staffForm.classList.toggle('active');
});

// Function to search for an employee in the table
function searchTable() {
let input, filter, table, tr, td, i, txtValue;
// Get the input element where the user types the search query
input = document.querySelector('.search');
// Convert the search query to uppercase to make the search case-insensitive
filter = input.value.toUpperCase();
// Get the table element by its ID
table = document.querySelector('#salary-table');
// Get all the rows of the table
tr = table.getElementsByTagName('tr');
// Loop through each row of the table
for (i = 0; i < tr.length; i++) {
// Get the first column of the row (where the name of the employee is)
td = tr[i].getElementsByTagName('td')[0];
if (td) {
// Get the text content of the column (the name of the employee)
txtValue = td.textContent || td.innerText;
// Check if the name of the employee matches the search query
if (txtValue.toUpperCase().indexOf(filter) > -1) {
// If the name matches, display the row
tr[i].style.display = '';
} else {
// If the name doesn't match, hide the row
tr[i].style.display = 'none';
}
}
}
}

// Add an event listener to the search input, so that the search function is called whenever the user types something in the input
document.querySelector('.search').addEventListener('keyup', searchTable);

// Get the theme toggle switch and set its initial state
const themeToggle = document.querySelector('#theme-toggle');
setThemeMode();

// Listen for changes to the theme toggle switch
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    // Dark mode
    document.body.classList.add('dark-mode');
  } else {
    // Light mode
    document.body.classList.remove('dark-mode');
  }
});

// Function to set the initial theme mode based on user preference
function setThemeMode() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // User prefers dark mode
    themeToggle.checked = true;
    document.body.classList.add('dark-mode');
  } else {
    // User prefers light mode
    themeToggle.checked = false;
    document.body.classList.remove('dark-mode');
  }
}

const logoutBtn = document.querySelector('#logoutBtn');

logoutBtn.addEventListener('click', () => {
  // Perform your logout logic here
  // For example, clear the session storage and redirect to the login page
  sessionStorage.clear();
  window.location.replace("https://codepen.io/jackson133/pen/OJBEEew");
});