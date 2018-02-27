import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
import FactoryGuy from 'ember-data-factory-guy';
import Ember from 'ember';

var App, ctrl;

moduleFor('controller:item.edit', 'item.edit controller', {
  beforeEach: function() {
    ctrl = this.subject();
    App = startApp();
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('check get propertie', function(assert){
  var item = FactoryGuy.make("item");
  ctrl.set('model', item);
  assert.equal(ctrl.get('model'), item);
});
