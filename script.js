// Wants table not text areas 

const table = document.getElementById("table"); 
const btn = document.getElementById("btn");


btn.addEventListener("click", function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById("first-name").value; 
    var lastName = document.getElementById("last-name").value; 
    var dob = document.getElementById("dob").value; 
    var doj = document.getElementById("doj").value; 

    // var area = document.createElement('textarea');
    // area.textContent = 
    // `Name: ${firstName} ${lastName}
    // DOB: ${dob}
    // DOJ: ${doj}` 
    // ;
    // container.appendChild(area); 

    //create new row
    const newRow = document.createElement('tr');
    //create new cell elements 
    const firstNameCell = document.createElement('td'); 
    const lastNameCell = document.createElement('td'); 
    const dobCell = document.createElement('td'); 
    const dojCell = document.createElement('td');
    
    firstNameCell.textContent = firstName; 
    lastNameCell.textContent = lastName; 
    dobCell.textContent = dob; 
    dojCell.textContent = doj; 

    newRow.appendChild(firstNameCell); 
    newRow.appendChild(lastNameCell); 
    newRow.appendChild(dobCell); 
    newRow.appendChild(dojCell); 

    const deleteButton = document.createElement('button'); 
    deleteButton.textContent = 'Delete'; 
    newRow.appendChild(deleteButton); 

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    newRow.appendChild(editButton);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    newRow.appendChild(saveButton);

    deleteButton.addEventListener ("click", function(event){
        event.preventDefault(); 
        container.removeChild(area); 
        container.removeChild(deleteBtn); 
        container.removeChild(editButton); 
        container.removeChild(saveButton); 
        
    });

    editButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        // Enable the textarea for editing
        area.removeAttribute('readonly');
      });

    saveButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        // Disable the textarea for editing
        area.setAttribute('readonly', true); 
      });
    
    // Append the new row to the table body
    table.querySelector('tbody').appendChild(newRow);


});

