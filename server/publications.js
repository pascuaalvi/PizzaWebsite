Meteor.publish('allProducts', function() {
  return Products.find();
});