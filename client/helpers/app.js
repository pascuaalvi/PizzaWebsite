Meteor.startup(function () {
  Meteor.subscribe('allProducts');

  if (Meteor.isClient)
    if (Meteor.user()) {
      language = Meteor.user().profile.language;
    }
    else {
      //detect the language used by the browser
      language = (window.navigator.userLanguage || window.navigator.language)
      language = getLanguage(language);
    }
    i18n.setLanguage('fr_FR');
});

checkLogin = function (userId) {
  if(Meteor.userId() === null){
  	console.log("Redirected to Main Page.");
    Session.set('currentState', DELIVERY_STATE);
  }
}
