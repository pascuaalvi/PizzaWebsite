Template.deliveryDetails.helpers({
  order: function () {
    return Session.get('refreshList');
  },
  grandTotal: function () {
    return Session.get('grandTotal');
  },
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
  nameError: function(){
    return Session.get('nameError');
  },
  phoneError: function(){
    return Session.get('phoneError');
  },
  addressError: function(){
    return Session.get('addressError');
  },
  locationError: function(){
    return Session.get('locationError');
  }
});

Template.deliveryDetails.events({
  'change #location': function (){
    updateDeliveryCosts();
  },
  'click #confirm': function (){
    var name = validateField('name');
    var phone = validateField('phone');
    var addr = validateField('address');
    var location = validateField('location');
    if (Session.get('finalTotal') != null && name && phone && addr && location) {
      Session.set('currentState','summary')
    }
  }
});

