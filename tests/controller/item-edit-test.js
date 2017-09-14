import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import Ember from 'ember';

var App, ctrl;

moduleFor('controller:item.edit', 'item.edit controller', {
  // needs: ['service:i18n'],
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

// test('check default properties', function(assert){
//   i18n: Ember.inject.service(),
//   assert.equal(ctrl.get('itemDescriptionPlaceholder'), true);
// });


test('check get propertie', function(assert){
  var item = FactoryGuy.make("item");
  ctrl.set('model', item);
  assert.equal(ctrl.get('model'), item);
});

// test('check submitItem action', function(assert){
//   var offer = FactoryGuy.make("offer");
//   var donorCondition = FactoryGuy.make("donor_condition");
//   var item = FactoryGuy.make("item",{offer:offer, donorCondition: donorCondition, state: "draft"});
//   Ember.run(function(){
//     ctrl.set('model', item);
//     ctrl.send("submitItem");
//     assert.equal(ctrl.get('model.state'), "submit");
//   });
// });
