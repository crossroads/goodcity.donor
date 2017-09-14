import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
// import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import Ember from 'ember';

var App, ctrl;

moduleFor('controller:support', 'support controller', {

  beforeEach: function() {
    // needs: ['service:session'];
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

// test('check donationAmount', function(assert){
//   // ctrl.set("session.currentUser.donationAmount", 10);
//   assert.equal(ctrl.get('donationAmount'), 10);
// });
