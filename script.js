// FIRST write code to dynamically add HTML elements 
// THEN add to local storage 
// (See scrap.js for original idea)

//const list = document.getElementById("list");
const container = document.getElementById("container"); 
const btn = document.getElementById("btn");


btn.addEventListener("click", function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById("first-name").value; 
    var lastName = document.getElementById("last-name").value; 
    var dob = document.getElementById("dob").value; 
    var doj = document.getElementById("doj").value; 

    var area = document.createElement('textarea');
    area.textContent = 
    `Name: ${firstName} ${lastName}
    DOB: ${dob}
    DOJ: ${doj}` 
    ;
    container.appendChild(area); 

    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Delete'; 
    container.appendChild(deleteBtn); 

    deleteBtn.addEventListener ("click", function(event){
        event.preventDefault(); 
        container.removeChild(area); 
        container.removeChild(deleteBtn); 
    })


});

