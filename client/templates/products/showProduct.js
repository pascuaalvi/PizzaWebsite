Template.showProduct.events = {
  'click #addToCart': function (e,t) {
    e.preventDefault();

    var orders = Session.get('orderList');

    for (index = 0; index < orders.length; index++) {
      var item = orders[index];
      if(item._id === this._id){
        var increment = parseInt(document.getElementById(item.name).value);
        orders[index].quantity += increment;
      }
    }

    Session.set('orderList',orders);
  }
}

Template.showProduct.helpers({
  ordered: function () {
    console.clear();
    var orders = Session.get('orderList');
    for (index = 0; index < orders.length; index++) {
      console.log(orders[index].name + ":" + orders[index].quantity);
      if(orders[index]._id === this._id){
        return orders[index].quantity;
      }
    }
  }
});