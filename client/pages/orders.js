Template.orders.helpers({
  user: function() {
    return Meteor.user().username;
  },
  products: function() {
    return false;
  }
});