function dojIsValid () {
    // get the DOB date and add 18 years
      var dobStr = $("#dob").val(); 
      var dobParts = dobStr.split("/"); 
      var dobDate = new Date (dobParts[2], dobParts[1], dobParts[0]); 
        console.log(dobDate); 
      var dobEighteenYearsLater = new Date(dobDate.getFullYear() + 18, dobDate.getMonth(), dobDate.getDate());
      var dobEighteenYearsLater = new Date ((dobParts[2]+18), dobParts[1], dobParts[0]); 
        console.log(dobEighteenYearsLater); 
      var dojStr = $("#doj").val(); 
      var dojParts = dojStr.split("/");
      var dojDate = new Date (dojParts[2], dojParts[1], dojParts[0]); 
      if (dojDate < dobEighteenYearsLater) {
        return false
      } else {
        return true; 
      }
    }; 