Template.layout.helpers({
    currentPage: function() {
      return Session.get('currentState');
    },
    deliveryStage: function(){
      return (Session.get('currentState') === "delivery")
    },
    orderStage: function(){
      return (Session.get('currentState') === "orders")
    },
    pickUpDetailStage: function(){
      return (Session.get('currentState') === "pickUpDetails")
    },
    deliveryDetailStage: function(){
      return (Session.get('currentState') === "deliveryDetails")
    },
    stage1: function(){
      var state = Session.get('currentState');
      if(state === "delivery"){
        return 'inProgress'
      }
      else{
        return 'complete'
      }
    },
    stage2: function(){
      var state = Session.get('currentState');
      if(state === "orders"){
        return 'inProgress'
      }
      else if(state === "delivery"){
        return null;
      }
      else{
        return 'complete'
      }
    },
    stage3: function(){
      var state = Session.get('currentState');
      if(state === "pickUpDetails" || state === "deliveryDetails"){
        return 'inProgress'
      }
      else if(state === "delivery" || state === "orders"){
        return null;
      }
      else{
        return 'complete'
      }
    },
    stage4: function(){
      return null;
    },

});