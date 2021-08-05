import Ember from "ember";
import startApp from "../helpers/start-app";
import FactoryGuy from "ember-data-factory-guy";
import "../factories/user";
import "../factories/territory";
import "../factories/district";
import { module, test } from "qunit";
import testSkip from "../helpers/test-skip";

var App, hk_user, timer;

module("Acceptance: Register", {
  beforeEach: function() {
    App = startApp();
    App.__container__.lookup("service:session").set("authToken", null);
    App.__container__.lookup("controller:authenicate").set("timer", 60);
    hk_user = FactoryGuy.make("with_hk_mobile");
  },
  afterEach: function() {
    Ember.run(App, "destroy");
  }
});

test("All required registration details are filled", function(assert) {
  assert.expect(5);

  visit("/register");
  fillIn("#mobile", hk_user.get("mobile"));
  triggerEvent("#mobile", "blur");
  fillIn("#first_name", hk_user.get("firstName"));
  fillIn("#last_name", hk_user.get("lastName"));
  click("#all");

  andThen(function() {
    var districtId = find(
      '.district-selection option:contains("Tung Chung")'
    ).val();
    find(".district-selection select").val(districtId);
  });

  triggerEvent("#mobile", "blur");

  andThen(function() {
    assert.equal(find("#mobile").val(), hk_user.get("mobile"));
    assert.equal(find("#first_name").val(), hk_user.get("firstName"));
    assert.equal(find("#last_name").val(), hk_user.get("lastName"));
    assert.equal(
      find(".district-selection :selected")
        .text()
        .trim(),
      "Tung Chung"
    );
  });

  click("#registerUser");

  andThen(function() {
    assert.equal(currentURL(), "/authenticate");
  });
});

testSkip(
  "mobile number length should be 8 digit (excluding country code)",
  function(assert) {
    assert.expect(1);

    visit("/register");
    fillIn("#mobile", hk_user.get("mobile"));
    triggerEvent("#mobile", "blur");
    fillIn("#first_name", hk_user.get("firstName"));
    fillIn("#last_name", hk_user.get("lastName"));

    andThen(function() {
      assert.equal(find("#mobile").val().length, 8);
    });
  }
);
