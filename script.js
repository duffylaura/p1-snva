
var firstName = document.getElementById("first-name").value; 
var lastName = document.getElementById("last-name").value; 
var dob = document.getElementById("dob").value; 
var doj = document.getElementById("doj").value; 

// FIRST write code to dynamically add HTML elements 
// THEN add to local storage 
// (See scrap.js for original idea)

const list = document.getElementById("list");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const item = document.createElement("li");
    item.textContent = 
    `Name: ${firstName} ${lastName}
    DOB: ${dob}
    DOJ: ${doj}` 
    ;
    list.appendChild(item); 
});

