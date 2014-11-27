Meteor.publish('allProducts', function() {
  return Products.find();
});


Meteor.publish('orders',function(userId) {
  return Orders.find({userId: userId});
});

