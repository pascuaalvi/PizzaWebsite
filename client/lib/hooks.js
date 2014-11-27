AutoForm.hooks({
  insertOrderForm: {
    before: {
      "orderInsert": function(doc, template) {
        var call = Meteor.call('orderInsert', doc, Session.get('orderList'), function (error, result){
          if(error){
            console.log("Error: "+ error);
          }
          else{
            Session.set('currentOrder', result);
            Session.set('currentState', SUMMARY_STATE);
          }
        });
      }
    }
  }
});