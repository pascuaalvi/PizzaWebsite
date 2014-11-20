updateDeliveryCosts = function () {
  Session.set('location',document.getElementById("location").value);
}

validateField = function (id) {
      if(document.getElementById(id).value === "" ||
        document.getElementById(id).value === null){
        Session.set(id+'Error',"This field is required");
        return false;
      }
      else{
        Session.set(id+'Error',"");
        var value = document.getElementById(id).value;
        if(id === "phone"){
          if(! value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
            Session.set(id+'Error',"This phone number is invalid");
            return false;
          }
        }
        Session.set(id,value);
        return true;
      }
}