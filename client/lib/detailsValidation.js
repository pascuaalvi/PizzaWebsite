updateDeliveryCosts = function () {
  Session.set('location',document.getElementById("location").value);
}

validateField = function (id) {
  var docObject = document.getElementById(id);
  if(docObject !== null){
      if(document.getElementById(id).value === "" ||
        document.getElementById(id).value === null){
        Session.set(id+'Error',"This field is required");
        console.log("Validation Failed: "+id);
        return false;
      }
      else{
        Session.set(id+'Error',"");
        var value = document.getElementById(id).value;
        if(id === "phone"){
          if(! value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4}$)/)){
            Session.set(id+'Error',"This phone number is invalid. \n The acceptable format is (XXX) XXX-XXXX.");
            console.log("Validation Failed: "+id);
            return false;
          }
        }
        if(id === "date"){
          if(! value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
            Session.set(id+'Error',"This date is invalid. \n The acceptable format is dd/mm/yyyy");
            console.log("Validation Failed: "+id);
            return false;
          }
        }
        console.log("Validation Success: "+id + " with value of "+ value);

        return value;
      }
    }
    else{
      console.log("Document element doesn't exist");
      return false;
    }
}