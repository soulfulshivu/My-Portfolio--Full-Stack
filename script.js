// ==========================================
// Portfolio JavaScript
// Tasks 22 - 38
// ==========================================

// Task 22 - Welcome Message
console.log("Welcome to My Portfolio Website!");

// ------------------------------------------
// Task 23 - Profile Stats
// ------------------------------------------

let totalProjects = 3;
let totalSkills = 6;
let role = "AI & ML Student";

console.log("Projects:", totalProjects);
console.log("Skills:", totalSkills);
console.log("Role:", role);

// ------------------------------------------
// Task 24 - Greeting Based on Time
// ------------------------------------------

let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good Morning!");
} else if (hour < 18) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
}

// ------------------------------------------
// Task 25 - Skills Array
// ------------------------------------------

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "C Programming",
    "Machine Learning"
];

skills.forEach(function(skill){
    console.log(skill);
});

// ------------------------------------------
// Task 26 - Function
// ------------------------------------------

function formatTitle(title){
    return title.toUpperCase();
}

console.log(formatTitle("AI Resume Tool"));

// ------------------------------------------
// Task 27 - Portfolio Object
// ------------------------------------------

const portfolio = {
    name: "Shivanshi Karanjai",
    role: "AI & ML Student",
    college: "MAKAUT",
    location: "West Bengal"
};

console.log(portfolio);

// ------------------------------------------
// Task 28 - JS Loaded
// ------------------------------------------

console.log("script.js Loaded Successfully");

// ------------------------------------------
// Task 29 - Project Array
// ------------------------------------------

const projects = [

    {
        title: "Portfolio Website",
        description: "Responsive Portfolio using HTML CSS JavaScript"
    },

    {
        title: "AI Resume Tool",
        description: "Resume Job Alignment Copilot"
    },

    {
        title: "Weather App",
        description: "Simple Weather Forecast Application"
    }

];

// ------------------------------------------
// Task 30 - Profile Object
// ------------------------------------------

const profile = {

    name: "Shivanshi Karanjai",

    role: "AI & ML Student",

    skills: skills

};

console.log(profile);

// ------------------------------------------
// Task 31 & 32
// Select Elements
// ------------------------------------------

const form = document.getElementById("contactForm");

const heroText = document.getElementById("heroText");

const projectGrid = document.querySelector(".project-grid");

const themeBtn = document.getElementById("themeBtn");

const welcomeBtn = document.getElementById("welcomeBtn");

// ------------------------------------------
// Task 33
// Dynamic Message
// ------------------------------------------

heroText.innerHTML +=
"<br><br><strong>🚀 Currently Learning Full Stack Development</strong>";

// ------------------------------------------
// Task 34
// Welcome Button
// ------------------------------------------

welcomeBtn.addEventListener("click",function(){

    alert("Welcome to My Portfolio!");

});

// ------------------------------------------
// Theme Toggle
// ------------------------------------------

let savedTheme = localStorage.getItem("theme");

if(savedTheme){

    document.body.classList.add(savedTheme);

}else{

    document.body.classList.add("light");

}

themeBtn.addEventListener("click",function(){

    if(document.body.classList.contains("light")){

        document.body.classList.remove("light");

        document.body.classList.add("dark");

        localStorage.setItem("theme","dark");

    }

    else{

        document.body.classList.remove("dark");

        document.body.classList.add("light");

        localStorage.setItem("theme","light");

    }

});

// ------------------------------------------
// Task 35 & 36
// Contact Form Validation
// ------------------------------------------

form.addEventListener("submit",function(e){

    e.preventDefault();

    let name=document.getElementById("name");

    let email=document.getElementById("email");

    let message=document.getElementById("message");

    let valid=true;

    document.getElementById("nameError").textContent="";

    document.getElementById("emailError").textContent="";

    document.getElementById("messageError").textContent="";

    if(name.value.trim()==""){

        document.getElementById("nameError").textContent="Name is required.";

        valid=false;

    }

    if(email.value.trim()==""){

        document.getElementById("emailError").textContent="Email is required.";

        valid=false;

    }

    if(message.value.trim()==""){

        document.getElementById("messageError").textContent="Message is required.";

        valid=false;

    }

    if(valid){

        alert("Thank You! Your message has been submitted successfully.");

        localStorage.setItem("draftName",name.value);

        localStorage.setItem("draftEmail",email.value);

        localStorage.setItem("draftMessage",message.value);

        form.reset();

    }

});

// ------------------------------------------
// Task 37
// Dynamic Project Cards
// ------------------------------------------

projects.forEach(function(project){

    let card=document.createElement("div");

    card.className="project-card";

    card.innerHTML=`

        <h3>${project.title}</h3>

        <p>${project.description}</p>

    `;

    projectGrid.appendChild(card);

});

// ------------------------------------------
// Task 38
// Load Saved Draft
// ------------------------------------------

document.getElementById("name").value=
localStorage.getItem("draftName") || "";

document.getElementById("email").value=
localStorage.getItem("draftEmail") || "";

document.getElementById("message").value=
localStorage.getItem("draftMessage") || "";

// ------------------------------------------

console.log("Portfolio Version 1 Ready!");