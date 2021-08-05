import Ember from "ember";
import startApp from "../helpers/start-app";
import FactoryGuy from "ember-data-factory-guy";
import testSkip from "../helpers/test-skip";
import TestHelper from "ember-data-factory-guy/factory-guy-test-helper";
import "../factories/user_profile";
import { module, test } from "qunit";

var App, hk_user, non_hk_user, timer;

module("Acceptance: Login", {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
    hk_user = FactoryGuy.make("with_hk_mobile");
    non_hk_user = FactoryGuy.make("with_non_hk_mobile");
    App.__container__.lookup("controller:authenicate").set("timer", "60");
    App.__container__.lookup("controller:subscriptions").pusher = {
      get: function() {
        return {};
      },
      wire: function() {}
    };
  },
  afterEach: function() {
    Ember.run(function() {
      TestHelper.teardown();
    });
    Ember.run(App, "destroy");
  }
});

test("User able to enter mobile number and get the sms code", function(assert) {
  assert.expect(1);
  visit("/login");
  andThen(function() {
    var ele_logout = $("a:contains('Logout')");
    if (ele_logout.length > 0) {
      click(ele_logout[0]);
    }
  });

  andThen(function() {
    fillIn("#mobile", hk_user.get("mobile"));
    triggerEvent("#mobile", "blur");
    click("#getsmscode");
  });

  andThen(function() {
    assert.equal(currentURL(), "/authenticate");
  });
});

testSkip(
  "User is able to enter sms code and confirm and redirected to offers",
  function(assert) {
    assert.expect(2);

    var authToken = window.localStorage.authToken;
    visit("/authenticate");
    andThen(function() {
      var ele_logout = $("a:contains('Logout')");
      if (ele_logout.length > 0) {
        click(ele_logout[0]);
      }
    });

    andThen(function() {
      visit("/authenticate");
      fillIn("#pin", "1234");
      triggerEvent("#pin", "blur");
    });

    andThen(function() {
      assert.equal(find("#pin").val().length, 4);
      window.localStorage.authToken = authToken;
      click("#submit_pin");
    });

    andThen(function() {
      assert.equal(currentURL(), "/offers");
    });
  }
);
