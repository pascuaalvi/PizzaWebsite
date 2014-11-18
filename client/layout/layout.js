Template.layout.helpers({
    currentPage: function() {
      return Session.get('currentState');
    },
    deliveryStage: function(){
      return (Session.get('currentState') === "delivery")
    },
    orderStage: function(){
      return (Session.get('currentState') === "orders")
    }
});