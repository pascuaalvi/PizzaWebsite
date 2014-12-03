Accounts.onCreateUser(function (options, user) {
  if (user.services) {
    var service = _.keys(user.services)[0];
    var email = user.services[service].email;

    if (service === 'github') {
      if (!user.profile)
          user.profile = {};
      if (!user.profile.name)
          user.profile.name = user.services[service].username;
    }

    return user;
  }
  else{
    console.log("User Services is null.");
  }
});

Meteor.publish('userData', function () {
  if(!this.userId) return null;
  return Meteor.users.find({_id: this.userId});
});