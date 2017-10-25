import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import Ember from 'ember';

var App, ctrl;

moduleFor('controller:support', 'support controller', {

  beforeEach: function() {
    ctrl = this.subject();
    App = startApp();
    TestHelper.setup();
    syncDataStub(TestHelper);
  },

  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test('check hasDonationDetail', function(assert){
  assert.equal(ctrl.get('hasDonationDetail'), false);
});
