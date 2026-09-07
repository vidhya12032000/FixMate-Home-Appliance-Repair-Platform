const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

const logoutBtn = document.getElementById("logoutBtn");

const bookRepairBtn = document.getElementById("bookRepairBtn");

const serviceButtons = document.querySelectorAll(".service-btn");

const trackBtn = document.querySelector(".track-btn");

const bookingForm = document.getElementById("bookingForm");

const toast = document.getElementById("toast");


// ==========================
// Navigation
// ==========================

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const sectionName = link.dataset.section;

        // Remove active from links
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");


        // Hide all sections
        sections.forEach(function (section) {
            section.classList.remove("active-section");
        });


        // Show selected section
        document
            .getElementById(sectionName)
            .classList.add("active-section");


        // Close mobile sidebar
        sidebar.classList.remove("show");

    });

});


// ==========================
// Mobile Menu
// ==========================

menuBtn.addEventListener("click",  ()=>{

    sidebar.classList.toggle("show");

});



// Book Repair Button


bookRepairBtn.addEventListener("click",  ()=>{

    showSection("booking");

});


// Service Buttons


serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const service = button.dataset.service;

        showSection("booking");

        document.getElementById("appliance").value =
            service.replace(" Repair", "");

    });

});



// Track Button


trackBtn.addEventListener("click",  ()=>{

    showSection("tracking");

});



// Show Section Function


function showSection(sectionName) {

    navLinks.forEach((link)=> {

        link.classList.remove("active");

        if (link.dataset.section === sectionName) {
            link.classList.add("active");
        }

    });


    sections.forEach((section)=> {

        section.classList.remove("active-section");

    });


    document
        .getElementById(sectionName)
        .classList.add("active-section");

}



// Booking Form


bookingForm.addEventListener("submit",(event)=> {

    event.preventDefault();


    const appliance =
        document.getElementById("appliance").value;

    const date =
        document.getElementById("repairDate").value;

    const problem =
        document.getElementById("problem").value;

    const address =
        document.getElementById("address").value;


    if (
        appliance === "" ||
        date === "" ||
        problem.trim() === "" ||
        address.trim() === ""
    ) {

        showToast("Please fill all the fields");

        return;
    }


    showToast("Repair request booked successfully!");


    bookingForm.reset();

});



// Logout


logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";

});


// ==========================
// Toast
// ==========================

function showToast(message) {

    toast.innerText = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}