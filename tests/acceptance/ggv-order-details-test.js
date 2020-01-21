import $ from "jquery";
import { run } from "@ember/runloop";
import startApp from "../helpers/start-app";
import TestHelper from "ember-data-factory-guy/factory-guy-test-helper";

var App, t;

module("Driver: GGV Order details", {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
    var i18n = App.__container__.lookup("service:i18n");
    t = i18n.t.bind(i18n);
  },

  afterEach: function() {
    Em.run(function() {
      TestHelper.teardown();
    });
    run(App, "destroy");
  }
});

test("Display address information in English", function(assert) {
  assert.expect(4);
  visit("/offers/new");
  andThen(function() {
    visit("/ggv_orders/111255");
  });

  andThen(function() {
    assert.equal($(".delivery-from").length, 1);
    assert.equal($(".list-items li").length, 2);
    assert.equal(
      $(".list-items li")
        .text()
        .indexOf("example") > 0,
      true
    );
    assert.equal(
      $(".delivery-to")
        .text()
        .trim()
        .indexOf(t("ggv_order.crossroads_address1")) >= 0,
      true
    );
  });
});

test("Display address information in Chinese", function(assert) {
  assert.expect(2);
  visit("/offers/new");
  andThen(function() {
    visit("/ggv_orders/111255?ln=zh-tw");
  });

  andThen(function() {
    assert.equal(
      $(".list-items li")
        .text()
        .indexOf("example") > 0,
      true
    );
    assert.equal(
      $(".offer-status .msg")
        .text()
        .trim()
        .indexOf("您到達時，我們的職員會核對並確認下列資料") >= 0,
      false
    );
    window.localStorage.setItem("language", '"en"');
  });
});
