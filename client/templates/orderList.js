Template.orderList.helpers({
  order: function () {
    return refreshList();
  },
  grandTotal: function () {
    return sumList();
  },
  warning: function() {
    return Session.get('warning');
  }
});

Template.orderList.events = {
  'click #checkOut': function (e,t) {
    e.preventDefault();

    if (Meteor.userId) {
      var deliveryOption = Session.get('deliveryMode');
      if (deliveryOption === 'pickUp') {
        Session.set('currentState', 'pickUpDetails');
      }
      else if (deliveryOption === 'delivery') {
        if (parseFloat(Session.get('grandTotal')) >= 30) {
          Session.set('currentState', 'deliveryDetails');
        }
        else{
          Session.set('warning',"Deliveries must be over $30 in total value.")
        }
      }
    }
  }
}