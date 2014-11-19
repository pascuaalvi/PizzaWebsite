Template.deliveryDetails.helpers({
  order: function () {
    return Session.get('refreshList');
  },
  grandTotal: function () {
    return Session.get('grandTotal');
  },
  deliveryCharge: function() {
    return 0;
  }
});