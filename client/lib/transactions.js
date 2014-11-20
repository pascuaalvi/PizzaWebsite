refreshList = function () {
  // The list of user orders
  var freshList = new Array();
  var freshIndex = 0;
  // Our map of product -> quantity
  var orders = Session.get('orders');
  // Loop through map to find non-zero quantities
  for (index = 0; index < orders.length; index++) {
    if(orders[index].quantity !== 0){
      freshList[freshIndex] = orders[index];
      freshIndex++;
    }
  }
  // If freshList is empty, then the user hasn't ordered anything
  //  as the quantities of all the products within the map is still 0.
  if(freshList.length === 0){
    return false;
  }
  else{
    Session.set('refreshList',freshList);
    return freshList;
  }
};

sumList = function () {
  var sum = 0;
  var orders = Session.get('refreshList');
  for (index = 0; index < orders.length; index++) {
      sum += parseFloat(orders[index].price * orders[index].quantity);
  }
  Session.set('grandTotal',sum.toFixed(2));
  return sum.toFixed(2);
}