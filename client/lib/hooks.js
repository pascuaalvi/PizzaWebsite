AutoForm.hooks({
  insertOrderForm: {
    before: {
      "orderInsert": function(doc, template) {
        var id = Meteor.call('orderInsert', doc, Session.get('refreshList'));
      }
    }
  }
});