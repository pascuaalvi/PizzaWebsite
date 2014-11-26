Orders = new Mongo.Collection("orders");

Orders.allow({
  insert: function(userId,doc){
    return !! userId;
  }
});

defaultSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 20
  },
  phone: {
    type: String,
    label: "Phone",
    regEx: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  },
  address: {
    type: String,
    label: "Address"
  },
});

deliverySchema = new SimpleSchema({
  location: {
    type: String,
    label: "Location"
  }
});

pickUpSchema = new SimpleSchema({
  date: {
    type: Date,
    label: "Date and Time"
  }
});

Meteor.methods({
  orderInsert: function(orderAttributes,orderList) {
    var user = Meteor.userId();
    check(Meteor.userId(), String);
      if(orderAttributes.location){
      check(orderAttributes, {
      // orderAttributes is a property of the transaction,
      // describing its attributes and their respective datatypes
        name: String,
        phone: String,
        address: String,
        location: String,
      });
    }
    else if(orderAttributes.date){
      check(orderAttributes, {
      // orderAttributes is a property of the transaction,
      // describing its attributes and their respective datatypes
        name: String,
        phone: String,
        address: String,
        date: Date,
      });
    }

    var order = _.extend(orderAttributes, {
        userId: user,
        orderList: orderList
      });
    console.log(order);

    var orderId = Orders.insert(order);


    if (Meteor.isClient){
      Session.set('currentOrder', orderId);
      Session.set('currentState', SUMMARY_STATE);
    }

    return orderId;
  }
});
