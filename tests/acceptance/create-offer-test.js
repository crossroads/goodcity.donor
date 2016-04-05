import Ember from 'ember';
import startApp from '../helpers/start-app';
import { make } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var App;

module('Create New Offer', {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();

    // prevent request to express server which returns 4 offers
    TestHelper.mockFindAll("offer", 0);
  },
  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test("should create new offer", function() {
  expect(3);

  make("offer_with_items", { id: 1 }); //check offer with items is not returned

  visit("/offers/new");

  andThen(function() {
    // test: created new offer and redirected to its show page.
    equal(currentURL(), '/offers/3');

    //test: item count zero
    equal($.trim(find('.tab-bar-section .title').text()), "Offer items (0)");

    //test: no items message
    equal($.trim($('.no-items').text()), "You don't have any items in this offer yet. Please add your first item!");
  });
});

test("should redirect to previous empty offer", function() {
  expect(4);

  var currentUserId = JSON.parse(window.localStorage.currentUserId);
  var user = make("user", {id:currentUserId});
  make("offer_with_items", {id:1, createdBy:user}); // check offer with items is not returned
  make("offer",{"id":5, createdBy:user});

  visit("/offers");

  andThen(function() {
    equal(currentURL(), '/offers');

    click("a:contains('Make a New Donation')");

    andThen(function(){
      equal(currentURL(), '/offers/5');

      //test: item count zero
      equal($.trim(find('.tab-bar-section .title').text()), "Offer items (0)");

      //test: no items message
      equal($.trim(find('.no-items').text()), "You don't have any items in this offer yet. Please add your first item!");
    });
  });
});
