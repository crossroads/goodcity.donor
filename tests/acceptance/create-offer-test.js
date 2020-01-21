import { run } from "@ember/runloop";
import startApp from "../helpers/start-app";
import { make } from "ember-data-factory-guy";
import TestHelper from "ember-data-factory-guy/factory-guy-test-helper";
import { module, test } from "qunit";
// import { mockFindAll } from 'ember-data-factory-guy';

var App, container;

module("Create New Offer", {
  beforeEach: function() {
    App = startApp({}, 2);
    container = App.__container__;
    TestHelper.setup();
  },
  afterEach: function() {
    Em.run(function() {
      TestHelper.teardown();
    });
    run(App, "destroy");
  }
});

test("should create new offer", function(assert) {
  assert.expect(3);

  make("offer_with_items", { id: 1 }); //check offer with items is not returned

  visit("/offers/new");

  andThen(function() {
    // test: created new offer and redirected to its show page.
    assert.equal(currentURL(), "/offers/3");

    //test: item count zero
    assert.equal(
      $.trim(find(".tab-bar-section .title").text()),
      "Offer items (0)"
    );

    //test: no items message
    assert.equal(
      $.trim($(".no-items").text()),
      "You don't have any items in this offer yet. Please add your first item!"
    );
  });
});

test("should redirect to previous empty offer", function(assert) {
  assert.expect(4);

  var currentUserId = JSON.parse(window.localStorage.currentUserId);
  var user = make("user", { id: currentUserId });
  make("offer_with_items", { id: 1, createdBy: user }); // check offer with items is not returned
  make("offer", { id: 5, createdBy: user });

  container.lookup("service:messageBox").custom = (
    message,
    btn1Text,
    btn1Callback
  ) => {
    btn1Callback();
  };

  visit("/offers");

  andThen(function() {
    assert.equal(currentURL(), "/offers");

    click("a:contains('Make a New Donation')");

    andThen(function() {
      assert.equal(currentURL(), "/offers/5");

      //test: item count zero
      assert.equal(
        $.trim(find(".tab-bar-section .title").text()),
        "Offer items (0)"
      );

      //test: no items message
      assert.equal(
        $.trim(find(".no-items").text()),
        "You don't have any items in this offer yet. Please add your first item!"
      );
    });
  });
});
