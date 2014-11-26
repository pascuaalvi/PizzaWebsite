Meteor.startup(function () {
  Meteor.subscribe('allProducts');
  Meteor.subscribe('userOrders',Meteor.userId());
  redirect();
});

redirect = function () {
  if(Meteor.userId() === null){
    Session.set('currentState', DELIVERY_STATE);
  }
}