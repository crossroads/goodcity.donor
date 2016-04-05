import Ember from 'ember';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var App, offer, offer1, item, item1;

module('Edit Item', {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup(App);
    syncDataStub(TestHelper);

    offer = FactoryGuy.make("offer", { state: "draft" });
    item = FactoryGuy.make("item",{ offer:offer, state: "draft" });

    offer1 = FactoryGuy.make("offer", { state: "draft" });
    item1 = FactoryGuy.make("item",{ offer:offer1, state: "submitted",
      donorDescription: "this is a test Item"});
    FactoryGuy.makeList("donor_condition", 2);
  },

  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test("Create Item with details", function() {
  expect(4);

  var edit_item_url = "/offers/" + offer.id + "/items/" + item.id + "/edit";
  visit(edit_item_url);

  andThen(function() {
    equal(currentURL(), edit_item_url);
  });

  fillIn("textarea[name=donorDescription]", "this is test item");
  click(":radio[value=1]");

  andThen(function() {
    equal(find("textarea[name=donorDescription]").val(), "this is test item");
  });

  TestHelper.handleUpdate("item", item.id);
  click("button:contains('Save Details')");
  Ember.run(function(){ item.set("state", "submitted"); });

  andThen(function(){
    equal(currentURL(), "/offers/" + offer.id + "/offer_details");
    equal($('.item-content li:eq(0) .ellipsis').text(), "this is test item");
  });
});

test("Discard Item with details", function() {
  var edit_item_url = "/offers/" + offer.id + "/items/" + item.id + "/edit";
  visit(edit_item_url);

  andThen(function() {
    equal(currentURL(), edit_item_url);
  });

  fillIn("textarea[name=donorDescription]", "this will be discarded");

  TestHelper.handleDelete("item", item.id);
  click(".button:contains('Cancel')");

  andThen(function(){
    equal(currentURL(), "/offers/"+ offer.id);
    equal($('.item-content li').length, 0);
  });
});

test("Discard changes for existing Item", function() {
  var edit_item_url = "/offers/" + offer1.id + "/items/" + item1.id + "/edit";
  visit(edit_item_url);

  andThen(function() {
    equal(currentURL(), edit_item_url);
  });

  fillIn("textarea[name=donorDescription]", "changes for existing item");

  click(".button:contains('Cancel')");

  andThen(function(){
    equal(currentURL(), "/offers/"+ offer1.id +"/offer_details");
    equal($('.item-content li:eq(0) .ellipsis').text(), "this is a test Item");
  });
});
