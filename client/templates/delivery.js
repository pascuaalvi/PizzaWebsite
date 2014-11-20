Template.delivery.events = {
  'click #pickUp': function () {
    setDeliveryMode('pickUp');
  },
  'click #delivery': function () {
    setDeliveryMode('delivery');
  },
}

Template.delivery.helpers({
  user: function() {
    return Meteor.userId();
  }
});

setDeliveryMode = function (mode){
  Session.set('deliveryMode', mode);
  if(Meteor.userId){
    Session.set('currentState', ORDERS_STATE);
  }
}