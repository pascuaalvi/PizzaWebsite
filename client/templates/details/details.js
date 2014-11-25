Template.details.helpers({
  delivery: function() {
    return Session.get('deliveryMode') === 'delivery';
  },
  pickUp: function () {
    return Session.get('deliveryMode') === 'pickUp';
  },
  locationOptions: function() {
    return [
        {label: "WellingtonCBD", value: "5"},
        {label: "Outside WellingtonCBD", value: "10"}
    ];
  }
});

