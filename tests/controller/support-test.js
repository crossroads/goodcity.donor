import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
import Ember from 'ember';

var App, ctrl;

moduleFor('controller:support', 'support controller', {

  beforeEach: function() {
    ctrl = this.subject();
    App = startApp();
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('check hasDonationDetail', function(assert){
  assert.equal(ctrl.get('hasDonationDetail'), false);
});
