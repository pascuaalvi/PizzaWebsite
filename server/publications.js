Meteor.publish('allProducts', function() {
  return Products.find();
});

Meteor.publish('userOrders',function(userId) {
  return Orders.find({userId: userId});
});
// Still no subscriptions