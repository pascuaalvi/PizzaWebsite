Template.details.helpers({
  orderList: function () {
    return Session.get('orderList');
  },
  delivery: function() {
    return Session.get('deliveryMode') === 'delivery';
  },
  pickUp: function () {
    return Session.get('deliveryMode') === 'pickUp';
  }
});

pickupOrDelivery = function (pickupOutput,deliveryOutput){
  var mode = Session.get('deliveryMode');
    if(mode === 'pickUp'){
      return pickupOutput;
    }
    else if(mode === 'delivery'){
      return deliveryOutput;
    }
}
  locationOptions: function() {
    return [
        {label: "WellingtonCBD", value: "5"},
        {label: "Outside WellingtonCBD", value: "10"}
    ];
  }
});

Template.details.events({
     'change #location': function(e,t){
        var location = document.getElementById('location').value;
        Session.set('location', location);
     }
 });
