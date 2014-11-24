Template.layout.helpers({
    progress: function (){
      var progress = (Session.get('currentState')/3)*100;
      var progress = progress.toFixed(0);
      return progress+"%";
    },
    currentView: function () {
      checkLogin(Meteor.userId());
      return item[Session.get('currentState')].templateName;
    },
    progressItem: function () {
      return item;
    }
});

