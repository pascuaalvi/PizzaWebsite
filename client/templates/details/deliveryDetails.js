Template.deliveryDetails.helpers({
  locationError: function(){
    return Session.get('locationError');
  }
});

Template.deliveryDetails.rendered = function () {
  document.getElementById("location").selectedIndex = -1;
};

Template.deliveryDetailsNumbers.helpers({
  deliveryCharge: function() {
    var num = 0;
    if(Session.get('location')){
      num = Session.get('location');
    }
    else{
      return "No delivery location selected."
    }
    num = parseFloat(num).toFixed(2);
    return "Delivery Charges: $"+num;
  },
  totalWithDelivery: function () {
    if(Session.get('grandTotal') != null && Session.get('location') != null){
      var num = parseFloat(Session.get('grandTotal')) + parseFloat(Session.get('location'));
      Session.set('finalTotal', num.toFixed(2));
      return  "$"+num.toFixed(2);
    }
    else {
      return "Please fill in a delivery location.";
    }
  },
  total: function () {
    return Session.get('grandTotal');
  }
});

Template.deliveryDetails.events({
  'change #location': function (){
    updateDeliveryCosts();
  }
});

