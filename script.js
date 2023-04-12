// Wants table not text areas 

const table = document.getElementById("table"); 
const btn = document.getElementById("btn");

window.addEventListener("load", (event) => {
  $( "#dob" ).datepicker(); 
  $("#doj").datepicker(); 
}); 

btn.addEventListener("click", function(event) {
    event.preventDefault(); 

    var firstName = document.getElementById("first-name").value; 
    var lastName = document.getElementById("last-name").value; 
    var dob = document.getElementById("dob").value; 
    var doj = document.getElementById("doj").value; 

    //validate dates
    if (isValidDate(dob) && isValidDate(doj) && dojIsValid(dob, doj) && firstName !== undefined && lastName !== undefined) {
    //create new row
    const newRow = document.createElement('tr');
    //create new cell elements 
    const firstNameCell = document.createElement('td'); 
    const lastNameCell = document.createElement('td'); 
    const dobCell = document.createElement('td'); 
    const dojCell = document.createElement('td');
    const deleteCell = document.createElement('td'); 
    const editCell = document.createElement('td'); 
    const saveCell = document.createElement('td');
    
    firstNameCell.textContent = firstName; 
    lastNameCell.textContent = lastName; 
    dobCell.textContent = dob; 
    dojCell.textContent = doj; 

    newRow.appendChild(firstNameCell); 
    newRow.appendChild(lastNameCell); 
    newRow.appendChild(dobCell); 
    newRow.appendChild(dojCell); 
    newRow.appendChild(deleteCell);
    newRow.appendChild(editCell); 
    newRow.appendChild(saveCell); 

    const deleteButton = document.createElement('button'); 
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-small');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete'; 
    deleteCell.appendChild(deleteButton); 

    const editButton = document.createElement('button');
    editButton.classList.add('btn');
    editButton.classList.add('btn-small');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    editCell.appendChild(editButton);

    const saveButton = document.createElement('button'); 
    saveButton.classList.add('btn');
    saveButton.classList.add('btn-small');
    saveButton.classList.add('save-btn');
    saveButton.textContent = 'Save';
    saveCell.appendChild(saveButton);

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
        const a = row.querySelector('td:nth-child(1)'); 
        const b = row.querySelector('td:nth-child(2)'); 
        const c = row.querySelector('td:nth-child(3)');
        const d = row.querySelector('td:nth-child(4)');
        a.contentEditable = true;
        b.contentEditable = true;
        c.contentEditable = true;
        d.contentEditable = true;
    } )

    saveButton.addEventListener("click", function(event) {
      const row = editButton.parentNode.parentNode; 
      //get values from cells // store in variables
      const a = row.querySelector('td:nth-child(1)'); //grabbing hold of the HTML code not the value // .value isn't working either 
      const b = row.querySelector('td:nth-child(2)'); 
      const c = row.querySelector('td:nth-child(3)');
      const d = row.querySelector('td:nth-child(4)');

      if ((a && b) !== '' && isValidDate(c) && isValidDate(d)) {
      a.contentEditable = false;
      b.contentEditable = false;
      c.contentEditable = false;
      d.contentEditable = false;
      } else {
        alert ('When editing, names cannot be null and dates must be in MM/DD/YYYY format.')
      }     
    })
} else {
    alert('Names cannot be null; dates must be in MM/DD/YYYY format; DOJ must be at least 18 years after DOB.') //from initial form fill out
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

function dojIsValid () {
  var dobStr = $("#dob").val(); 
  var dobParts = dobStr.split("/"); 
  var dobDate = new Date (dobParts[2], dobParts[1], dobParts[0]); 
    console.log(dobDate); 
  var dobEighteenYearsLater = new Date(dobDate.getFullYear() + 18, dobDate.getMonth(), dobDate.getDate());
    console.log(dobEighteenYearsLater); 
  var dojStr = $("#doj").val(); 
  var dojParts = dojStr.split("/");
  var dojDate = new Date (dojParts[2], dojParts[1], dojParts[0]); 
  if (dojDate >= dobEighteenYearsLater) {
    return true
  } else {
    return false; 
  }
}; 