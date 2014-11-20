Template.layout.helpers({
    progress: function (){
      return Session.get('progress');
    },
    currentView: function () {
      return item[Session.get('currentState')].templateName;
    },
    progressItem: function () {
      return item;
    }
});