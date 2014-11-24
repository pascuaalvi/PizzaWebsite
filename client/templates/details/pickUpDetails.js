Template.pickUpDetails.helpers({
  dateError: function(){
    return Session.get('dateError');
  },
  timeError: function(){
    return Session.get('timeError');
  }
});

Template.pickUpDetailsNumbers.helpers({
  total: function () {
    Session.set('finalTotal', sumList());
    return Session.get('finalTotal');
  }
});

Template.pickUpDetails.rendered = function () {
  document.getElementById("time").selectedIndex = -1;
};
