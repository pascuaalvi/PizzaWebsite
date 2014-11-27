Template.detailsForm.helpers({
  order: function () {
    refreshSchema();
    return Session.get('orderList');
  },
  deliveryModeNumbers: function () {
    return pickupOrDelivery("pickUpDetailsNumbers","deliveryDetailsNumbers");
  }
});

pickupOrDelivery = function (pickupOutput,deliveryOutput){
  var mode = Session.get('deliveryMode');
    if(mode === 'pickUp'){
      return pickupOutput;
    }
    else if(mode === 'delivery'){
      return deliveryOutput;
    }
  }

refreshSchema = function () {
  orderSchema = new SimpleSchema([defaultSchema,pickupOrDelivery(pickUpSchema,deliverySchema)]);
  Orders.attachSchema(orderSchema);
};