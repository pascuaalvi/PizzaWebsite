Template.summary.helpers({
  name: function () {
    return Session.get('name');
  },
  order: function () {
    return Session.get('refreshList');
  },
  total: function () {
    return Session.get('finalTotal')
  }
});

Template.summary.events = {
  'click #checkOut': function (e,t) {
    e.preventDefault();

    if (Meteor.userId) {
      var deliveryOption = Session.get('deliveryMode');
      if (deliveryOption === 'pickUp') {
        Session.set('currentState', DETAILS_STATE);
      }
      else if (deliveryOption === 'delivery') {
        if (parseFloat(Session.get('grandTotal')) >= 30) {
          Session.set('currentState', DETAILS_STATE);
        }
        else{
          Session.set('warning',"Deliveries must be over $30 in total value.")
        }
      }
    }
  }
}