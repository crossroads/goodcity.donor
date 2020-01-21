import { run } from "@ember/runloop";
import { test, moduleFor } from "ember-qunit";
import startApp from "../helpers/start-app";
import TestHelper from "ember-data-factory-guy/factory-guy-test-helper";

var App;

moduleFor("controller:offers.index", "offers.index controller", {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    Em.run(function() {
      TestHelper.teardown();
    });
    run(App, "destroy");
  }
});

test("check default properties", function(assert) {
  var ctrl = this.subject();
  assert.equal(ctrl.get("sortProperties"), "latestUpdatedTime:desc");
});
