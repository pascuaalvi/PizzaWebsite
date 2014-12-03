if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    setupLogin();

    describe('Main Test', function () {
      var check = function(done) {
        if (Meteor.userId()) {
          done();
        }
        else setTimeout( function () {
          check(done);
        }, 1000 );
      }

      beforeEach(function( done ){
        check( done );
      });

      describe ("Successfully logged in.", function () {
        it('should have a Meteor ID', function () {
            hasUser = (Meteor.userId() !== null);
            console.log(hasUser);
            chai.assert.ok(hasUser, 'No Meteor userID detected');
        });
      });

      describe ('Delivery mode is set to pickup.', function () {
        it('session "deliveryMode" should be set to "pickUp"', function () {

            $('#pickUp').click();
            console.log(Session.get('deliveryMode'));
            chai.assert.equal(Session.get('deliveryMode'), 'pickUp');

        });
      });

    });
  });
}

setupLogin = function () {
  $('.dropdown-toggle').click();
  $('#signup-link').click();
  $('#login-username').val('Verse');
  $('#login-password').val('asdf12');
  $('#login-password-again').val('asdf12');
  $('#login-buttons-password').click();
};




