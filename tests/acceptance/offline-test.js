import Ember from 'ember';
import startApp from '../helpers/start-app';
import FactoryGuy from 'ember-data-factory-guy';
import testSkip from '../helpers/test-skip';

var App, offer, t;

module('Offline error', {
  beforeEach: function() {
    App = startApp();
    Ember.run.later = () => true;
    offer = FactoryGuy.make("offer");
    var i18n = App.__container__.lookup('service:i18n');
    t = i18n.t.bind(i18n);
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

testSkip("Display error popup", function() {
  $('.reveal-modal').remove();
  visit("/offers");
  $.mockjax({url:"/api/v1/offer*",status:0,responseText:"{}"});

  andThen(function(){
    equal(Ember.$("#errorMessage").text(), t("offline_error").toString());
    Ember.$('#errorModal').foundation('reveal', 'close');
  });
});
