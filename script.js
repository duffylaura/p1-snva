//Global variables
//use query selector to grab hold of information user enters 
var firstName = document.querySelector("#first-name").value; 
var lastName = document.querySelector("#last-name").value; 
var dob = document.querySelector("#dob"); 
var doj = document.querySelector("#doj"); 

// FIRST write code to dynamically add HTML elements 
// THEN add to local storage 
// (See scrap.js for original idea)

const container = document.getElementById("container");
const list = document.getElementById("list");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const nameItem = document.createElement("li");
  nameItem.textContent = `Name: ${firstName} ${lastName}` ;
  list.appendChild(nameItem); 
});

