Template.details.helpers({
  order: function () {
    return Session.get('refreshList');
  },
  nameError: function () {
    return Session.get('nameError');
  },
  phoneError: function () {
    return Session.get('phoneError');
  },
  addressError: function () {
    return Session.get('addressError');
  },
  deliveryMode: function () {
    var mode = Session.get('deliveryMode');
    if(mode === 'pickUp'){
      return "pickUpDetails";
    }
    else if(mode === 'delivery'){
      return "deliveryDetails";
    }
  }
  ,
  deliveryModeNumbers: function () {
    var mode = Session.get('deliveryMode');
    if(mode === 'pickUp'){
      return "pickUpDetailsNumbers";
    }
    else if(mode === 'delivery'){
      return "deliveryDetailsNumbers";
    }
  }
});

Template.details.events({
  'click #confirm': function (){
    var name = validateField('name');
    var phone = validateField('phone');
    var addr = validateField('address');
    Session.set('confirm',true);
    if (Session.get('finalTotal') != null && name && phone && addr) {
      Session.set('currentState',SUMMARY_STATE);
    }
  }
});
