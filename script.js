// Wants table not text areas 

const table = document.getElementById("table"); 
const btn = document.getElementById("btn");


btn.addEventListener("click", function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById("first-name").value; 
    var lastName = document.getElementById("last-name").value; 
    var dob = document.getElementById("dob").value; 
    var doj = document.getElementById("doj").value; 

    //validate dates
    if (isValidDate(dob) && isValidDate(doj) && firstName !== null && lastName !== null) {
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
    deleteButton.classList.add('btn');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete'; 
    newRow.appendChild(deleteButton); 

    const editButton = document.createElement('button');
    editButton.classList.add('btn');
    editButton.classList.add('edit-btn');
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
        //Validate dates 
        if (isValidDate(newC) && isValidDate(newD)) {
          if (newA !== null && newB !== null) {
          // Update the cells in the row with the new values
          row.querySelector('td:nth-child(1)').textContent = newA;
          row.querySelector('td:nth-child(2)').textContent = newB;
          row.querySelector('td:nth-child(3)').textContent = newC;
          row.querySelector('td:nth-child(4)').textContent = newD;
          } else {
            alert('Name cannot be blank.')
          }
        } else {
            alert('Please edit your dates in the following format MM/DD/YYYY')
        }
    } )
} else {
    alert('Names cannot be null and dates must be in MM/DD/YYYY format.')
}
});

function isValidDate(dateString) {
    // regular expression to match mm/dd/yyyy format
    var regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (!regex.test(dateString)) {
      return false; // format is invalid
    }
    var parts = dateString.split('/');
    var month = parseInt(parts[0], 10);
    var day = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
    if (month < 1 || month > 12) {
      return false; // month is invalid
    }
    if (day < 1 || day > 31) {
      return false; // day is invalid
    }
    if (year < 1900 || year > new Date().getFullYear()) {
      return false; // year is invalid
    }
    return true;
};

