import Ember from 'ember';
import startApp from '../helpers/start-app';

var App, t;

module('Authorization', {
  beforeEach: function() {
    App = startApp();
    var i18n = App.__container__.lookup('service:i18n');
    t = i18n.t.bind(i18n);
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test("Rediect to login if not logged-in", function() {
  expect(2);

  // todo: remove workaround for message box button actions not firing only under test environment
  var okClick;
  var messageBox = lookup("service:messageBox");
  var oldCustom = messageBox.custom;
  messageBox.custom = (message, btn1Text, btn1Callback, btn2Text, btn2Callback) => {
    okClick = btn1Callback;
    oldCustom.call(messageBox, message, btn1Text, btn1Callback, btn2Text, btn2Callback);
  };

  lookup('service:session').set('authToken', null);

  visit("/offers");

  andThen(function() {
    equal(Ember.$("#messageBoxText").text(), t("must_login").toString());
    okClick();
  });

  andThen(function() {
    equal(currentURL(), '/login');
  });
});

test("On login page redirect to home-page if already logged-in", function() {
  expect(1);

  visit("/login");

  andThen(function() {
    equal(currentURL(), '/offers');
  });
});

test("On register page redirect to home-page if already logged-in", function() {
  expect(1);

  visit("/register");

  andThen(function() {
    equal(currentURL(), '/offers');
  });
});
