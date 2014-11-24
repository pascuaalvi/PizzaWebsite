Template.header.helpers({
  pageTitle: function() {
    return Session.get('pageTitle');
  }
});

orderHistory = function () {
  if(confirm("Current Transaction will be cancelled. \n Continue?")){
    Session.set('currentState', 'orderHistory');
  }
}