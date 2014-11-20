Template.pickUpDetails.helpers({
  order: function () {
    return Session.get('refreshList');
  },
  total: function () {
    Session.set('finalTotal', sumList());
    return Session.get('finalTotal');
  },
  nameError: function(){
    return Session.get('nameError');
  },
  phoneError: function(){
    return Session.get('phoneError');
  },
  addressError: function(){
    return Session.get('addressError');
  },
  dateError: function(){
    return Session.get('dateError');
  },
  timeError: function(){
    return Session.get('timeError');
  }
});

Template.pickUpDetails.events({
  'click #confirm': function (){
    var name = validateField('name');
    var phone = validateField('phone');
    var addr = validateField('address');
    var date = validateField('date');
    var time = validateField('time');
    if (Session.get('finalTotal') != null && name && phone && addr && date && time) {
      Session.set('currentState','summary')
    }
  }
});

