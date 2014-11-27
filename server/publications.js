Meteor.publish('allProducts', function() {
  return Products.find();
});

Meteor.publish('orders', function (userID) {
	return Orders.find({userId: userID});
});
