Template.orderList.helpers({
  order: function () {
    return refreshList();
  },
  grandTotal: function () {
    return sumList();
  }
});

Template.orderList.events = {
  'click #checkOut': function (e,t) {
    e.preventDefault();

    if(Meteor.userId){
      var deliveryOption = Session.get('deliveryMode');
      if(deliveryOption === 'pickUp'){
        Session.set('currentState', 'pickUpDetails');
      }
      else if(deliveryOption === 'delivery'){
        Session.set('currentState', 'deliveryDetails');
      }
    }
  }
}