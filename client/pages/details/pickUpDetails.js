Template.pickUpDetails.helpers({
  order: function () {
    return refreshList();
  },
  grandTotal: function () {
    return sumList();
  }
});