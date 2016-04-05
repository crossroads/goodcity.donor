import recordsUtil from "../../../utils/records";
import { module, test } from "qunit";
import startApp from "../../helpers/start-app";
import testSkip from "../../helpers/test-skip";
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var store, App;

module("Records Util", {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
    store = FactoryGuy.store;
  },
  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
  }
});

test("unloads source record", function(assert) {
  assert.expect(2);
  var offer = FactoryGuy.make("offer");
  assert.ok(store.peekAll("offer").get("length") > 0);
  recordsUtil.unloadRecordTree(offer);
  andThen(() => assert.equal(store.peekAll("offer").get("length"), 0));
});

testSkip("unloads related record", function(assert) {
  assert.expect(2);
  var offer = FactoryGuy.make("offer", "with_items");
  assert.ok(store.peekAll("item").get("length") > 0);
  recordsUtil.unloadRecordTree(offer);
  andThen(() => assert.equal(store.peekAll("item").get("length"), 0));
});

testSkip("does not unload taxonomy record", function(assert) {
  assert.expect(2);
  var offer = FactoryGuy.make("offer", "with_gogovan_transport");
  assert.ok(store.peekAll("gogovan_transport").get("length") > 0);
  recordsUtil.unloadRecordTree(offer);
  andThen(() => assert.ok(store.peekAll("gogovan_transport").get("length") > 0));
});

// package.item is no longer async don't have another async relationship to try
testSkip("does not load an async relationship (belongsTo) not yet loaded", function(assert) {
  assert.expect(1);
  $.mockjax({url:"/api/v1/items/*",response:() => {
    Ember.run(() => assert.equal("async call was made", "no async call"));
  }});
  var packageItem = FactoryGuy.make("package", {item:1});
  assert.equal(store.peekAll("item").get("length"), 0);
  recordsUtil.unloadRecordTree(packageItem);
  andThen(() => {});
});

// item.unloadRecord() is being called but for some reason it doesn't work
testSkip("does unload async relationship (belongsTo) if already loaded", function(assert) {
  assert.expect(2);
  var packageItem = FactoryGuy.make("package");
  assert.equal(store.peekAll("item").get("length"), 1);
  recordsUtil.unloadRecordTree(packageItem);
  andThen(() => assert.equal(store.peekAll("item").get("length"), 0));
});
