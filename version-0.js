//Global variables
//use query selector to grab hold of information user enters 
var firstName = document.querySelector("#first-name"); 
var lastName = document.querySelector("#last-name"); 
var dob = document.querySelector("#dob"); 
var doj = document.querySelector("#doj"); 
//grab hold of submit button 
var btn = document.querySelector("#save-btn"); 
//grab hold of space to display stored information 
var displayArea = document.querySelector("#display-area"); 

// Call functions (local storage)
renderStorage(); 

function renderStorage() {
    //render stored information
    var storage = localStorage.getItem("storageKey"); 
    if (storage == null) {
        return
    } else {
        displayArea.textContent = storage; //if have time add in dynamic generated HTML element
    }

    //attach event listener to submit button
    btn.addEventListener("click", function(event) {
        event.preventDefault(); 
        var storage = document.querySelector("first-name").value; 
        displayArea.textContent = storage; 
        localStorage.setItem("storageKey", storage); 
        renderStorage(); 
    })

}