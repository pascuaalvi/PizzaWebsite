Orders = new Mongo.Collection('orders');

Orders.allow({
  insert: function(userId, doc){
    return true;
  }
});

Meteor.methods({
  orderInsert: function(orderAttributes,addOns) {
    var user = Meteor.userId();
    check(Meteor.userId(), String);
    check(orderAttributes, {
    // orderAttributes is a property of the transaction,
    // describing its attributes and their respective datatypes
      name: String,
      phone: String,
      address: String,
      type: String,
    });

    var order = _.extend(orderAttributes, {
        userId: user
      });

    if(orderAttributes.type === "pickUp"){
      check(addOns, {
        // addOns is an object containing extra information
        //  pertaining to the order, depending on whether it
        //  is a pickUp or delivery order.
        date: String,
        time: String
      });
      order = _.extend(orderAttributes, {
        date: addOns.date,
        time: addOns.time
      });
    }
    else if(orderAttributes.type === "delivery"){
      check(addOns, {
        // addOns is an object containing extra information
        //  pertaining to the order, depending on whether it
        //  is a pickUp or delivery order.
        location: String
        });
      order = _.extend(orderAttributes, {
        location: addOns.location
      });
    }
    console.log(order);
    var orderId = Orders.insert(order);
    console.log(orderId);
    return { _id: orderId };
  }
});

