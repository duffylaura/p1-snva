// Wants table not text areas 

const table = document.getElementById("table"); 
const btn = document.getElementById("btn");


btn.addEventListener("click", function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById("first-name").value; 
    var lastName = document.getElementById("last-name").value; 
    var dob = document.getElementById("dob").value; 
    var doj = document.getElementById("doj").value; 

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

    // Append the new row to the table body
    table.querySelector('tbody').appendChild(newRow);

    // delete button
    deleteButton.addEventListener ("click", function(event){
        event.preventDefault(); 
        table.querySelector('tbody').removeChild(newRow);
    });

    //edit button 
    editButton.addEventListener ("click", function(event) {
        const row = editButton.parentNode.parentNode; 
        //get values from cells // store in variables
        const a = row.querySelector('td:nth-child(1)').textContent; 
        const b = row.querySelector('td:nth-child(2)').textContent; 
        const c = row.querySelector('td:nth-child(3)').textContent;
        const d = row.querySelector('td:nth-child(4)').textContent;
        // prompt user with what they would like to edit 
        const newA = prompt('Edit first name: ', a); 
        const newB = prompt ('Edit last name: ', b); 
        const newC = prompt('Edit DOB: ', c); 
        const newD = prompt ('Edit DOJ: ', d); 
        // Update the cells in the row with the new values
        row.querySelector('td:nth-child(1)').textContent = newA;
        row.querySelector('td:nth-child(2)').textContent = newB;
        row.querySelector('td:nth-child(3)').textContent = newC;
        row.querySelector('td:nth-child(4)').textContent = newD;
    } )

});

