Meteor.publish('allProducts', function() {
  return Products.find();
});

Meteor.publish('allOrders', function () {
	return Orders.find();
})