Template.details.helpers({
  order: function () {
    return Session.get('refreshList');
  },
  nameError: function () {
    return Session.get('nameError');
  },
  phoneError: function () {
    return Session.get('phoneError');
  },
  addressError: function () {
    return Session.get('addressError');
  },
  deliveryMode: function () {
    return pickupOrDelivery("pickUpDetails","deliveryDetails");
  }
  ,
  deliveryModeNumbers: function () {
    return pickupOrDelivery("pickUpDetailsNumbers","deliveryDetailsNumbers");
  }
});

Template.details.events({
  'click #confirm': function (){
    var total = Session.get('finalTotal')

    console.log("Confirmed Order!");
    var orderName = validateField('name');
    var orderPhone = validateField('phone');
    var orderAddr = validateField('address');

    if (total !== null && orderName && orderPhone && orderAddr) {

      var mode = Session.get('deliveryMode');
      var order = {
        name: orderName,
        phone: orderPhone,
        address: orderAddr,
        type: mode
      };

      var addOns = pickupOrDelivery(
      {
        date: validateField('date'),time: validateField('time')
      },
      {
        location: validateField('location')
      });

      if((addOns.date !== null && addOns.time !== null) || (addOns.location !== null)){
        Meteor.call('orderInsert', order, addOns) , function(error) {
          if (error) {
            Errors.throw(error.reason);
            console.log('Error on insert: '+ error.reason);
          }
        }
        console.log('Moving to SUMMARY_STATE');
        Session.set('currentState',SUMMARY_STATE);
      }
    }
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
