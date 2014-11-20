Template.layout.helpers({
    progress: function(){
      return Session.get('progress');
    },
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
    summaryStage: function(){
      return (Session.get('currentState') === "summary")
    },
    stage1: function(){
      var state = Session.get('currentState');
      if(state === "delivery"){
        Session.set('progress',"0%");
        return 'inProgress'
      }
      else{
        return 'complete'
      }
    },
    stage2: function(){
      var state = Session.get('currentState');
      if(state === "orders"){
        Session.set('progress',"25%");
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
        Session.set('progress',"60%");
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
      var state = Session.get('currentState');
      if(state === "summary"){
        Session.set('progress',"100%");
        return 'complete'
      }
      else{
        return null;
      }
    },

});