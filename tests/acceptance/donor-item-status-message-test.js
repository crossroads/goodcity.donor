import Ember from 'ember';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var App, offer1, offer2, item2, item1, item3, item4;

module('Donor: Display Item Status', {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
    syncDataStub(TestHelper);

    offer1 = FactoryGuy.make("offer", {state:"submitted"});
    item1 = FactoryGuy.make("item", {offer: offer1, state:"submitted"});

    offer2 = FactoryGuy.make("offer", {state:"under_review"});
    item2 = FactoryGuy.make("item", {offer: offer2, state:"submitted"});
    item3 = FactoryGuy.make("item", {offer: offer2, state:"accepted"});
    item4 = FactoryGuy.make("item", {offer: offer2, state:"rejected"});
  },

  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test("Display item status for submitted item", function() {
  visit('/offers/' + offer1.id + "/items/"+ item1.id +"/messages");

  andThen(function() {
    equal(currentURL(), '/offers/' + offer1.id + "/items/"+ item1.id +"/messages");
    equal($.trim(find('.status-message').text()), "This item is awaiting review.");
  });
});

test("Display item status for under review item", function() {
  visit('/offers/' + offer2.id + "/items/"+ item2.id +"/messages");

  andThen(function() {
    equal(currentURL(), '/offers/' + offer2.id + "/items/"+ item2.id +"/messages");
    equal($.trim(find('.status-message').text()), "This item is being reviewed.");
  });
});

test("Display item status for accepted item", function() {
  visit('/offers/' + offer2.id + "/items/"+ item3.id +"/messages");

  andThen(function() {
    equal(currentURL(), '/offers/' + offer2.id + "/items/"+ item3.id +"/messages");
    equal($.trim(find('.status-message').text()), "This item has been accepted.");
  });
});

test("Display offer status for reviewed offer", function() {
  visit('/offers/' + offer2.id + "/items/"+ item4.id +"/messages");

  andThen(function() {
    equal(currentURL(), '/offers/' + offer2.id + "/items/"+ item4.id +"/messages");
    equal($.trim(find('.status-message').text()), "This item has been rejected.");
  });
});
