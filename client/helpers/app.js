Meteor.startup(function () {
  Meteor.subscribe('allProducts');
});

checkLogin = function (userId) {
  if(Meteor.userId() === null){
  	console.log("Redirected to Main Page.");
    Session.set('currentState', DELIVERY_STATE);
  }
  else{
  	Meteor.subscribe('userOrders',Meteor.userId());
  }
}
