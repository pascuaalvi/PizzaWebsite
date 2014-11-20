// Initialise empty list of orders
initialiseOrderList = function(){
  // An array of all products
  var allOrders = Products.find().fetch();
  // Make a new Map, that maps every product to a quantity
  var orders = new Array();
  // For every product, set quantity to 0
  var index;
  for (index = 0; index < allOrders.length; index++) {
    //console.log(allOrders[index]._id);
    orders[index] = {
      _id:   allOrders[index]._id,
      name:  allOrders[index].name,
      price: allOrders[index].price,
      quantity:0};
  }
  Session.set('orders',orders);
  return orders;
}

Template.orders.helpers({
  user: function() {
    initialiseOrderList()
    if (Meteor.user()) {
      return Meteor.user().username;
    }
  },
  product: function() {
    return Products.find();
  }
});