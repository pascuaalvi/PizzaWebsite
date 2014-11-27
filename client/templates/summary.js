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

Template.summary.rendered = function () {
	Meteor.subscribe('orders', Meteor.userId());
};