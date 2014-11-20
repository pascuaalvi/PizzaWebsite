Template.pickUpDetails.helpers({
  dateError: function(){
    if(Session.get('confirm') === true){
      validateField('date');
    }
    return Session.get('dateError');
  },
  timeError: function(){
    if(Session.get('confirm') === true){
      validateField('time');
      Session.set('confirm',false);
    }
    return Session.get('timeError');
  }
});

Template.pickUpDetailsNumbers.helpers({
  total: function () {
    Session.set('finalTotal', sumList());
    return Session.get('finalTotal');
  }
});

