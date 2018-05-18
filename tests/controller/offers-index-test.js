import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

moduleFor('controller:offers.index', 'offers.index controller', {
  beforeEach: function() {
    App = startApp();
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('check default properties', function(assert){
  var ctrl = this.subject();
  assert.equal(ctrl.get('sortProperties'), "latestUpdatedTime:desc");
});
