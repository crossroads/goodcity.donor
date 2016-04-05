import Ember from 'ember';
import startApp from '../helpers/start-app';
import FactoryGuy from 'ember-data-factory-guy';
import '../factories/user';
import '../factories/territory';
import '../factories/district';

var App, hk_user;

module('Acceptance: Register', {
  beforeEach: function() {
    App = startApp();
    lookup('service:session').set('authToken', null);
    hk_user = FactoryGuy.make('with_hk_mobile');
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test("All required registration details are filled", function() {
  expect(5);

  visit('/register');
  fillIn('#mobile', hk_user.get("mobile"));
  triggerEvent('#mobile', 'blur');
  fillIn('#first_name',  hk_user.get("firstName") );
  fillIn('#last_name', hk_user.get("lastName"));
  click("#all");

  andThen(function() {
    var districtId = find('.district-selection option:contains("Tung Chung")').val();
    find('.district-selection select').val(districtId);
  });

  triggerEvent('#mobile', 'blur');

  andThen(function() {
    equal(find('#mobile').val(), hk_user.get("mobile"));
    equal(find('#first_name').val(), hk_user.get("firstName"));
    equal(find('#last_name').val(), hk_user.get("lastName"));
    equal(find('.district-selection :selected').text().trim(), "Tung Chung");
  });

  click("#registerUser");

  andThen(function(){
    equal(currentURL(), "/authenticate");
  });
});

test("cannot register unless mobile number details are entered", function() {
  expect(1);

  visit('/register');
  andThen(function() {
    fillIn("#first_name",  hk_user.get("firstName") );
    fillIn('#last_name', hk_user.get("lastName"));

    click("#registerUser");

    andThen(function() {
      equal(currentURL(), '/register');
    });
  });
});

test("mobile number length should be 8 digit (excluding country code)", function() {
  expect(1);

  visit('/register');
  fillIn('#mobile', hk_user.get("mobile"));
  triggerEvent('#mobile', 'blur');
  fillIn("#first_name",  hk_user.get("firstName") );
  fillIn('#last_name', hk_user.get("lastName"));

  andThen(function() {
    equal(find('#mobile').val().length, 8);
  });
});
