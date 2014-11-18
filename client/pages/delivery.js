Template.delivery.events = {
  'click #pickUp': function () {
    Session.set('deliveryMode', 'pickUp');
    if(Meteor.userId){
      Session.set('currentState', "orders");
    }
  },
  'click #delivery': function () {
    Session.set('deliveryMode', 'delivery');
    if(Meteor.userId){
      Session.set('currentState', "orders");
    }
  },
}

Template.delivery.helpers({
  user: function() {
    return Meteor.userId();
  }
});