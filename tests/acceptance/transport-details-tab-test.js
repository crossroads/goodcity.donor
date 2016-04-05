import Ember from 'ember';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var App, offer1, item1, offer2, item2, offer3, item3, offer4,
  item4, delivery1, ggv_order1, offer5, item5, item7, delivery2, ggv_order2,
  offer6, item6, offer7, offer8, ggv_order3, delivery3;

module('Display Transport Details', {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
    syncDataStub(TestHelper);
    lookup('service:session').set('isAdmin', false);

    offer1 = FactoryGuy.make("offer", {state:"submitted"});
    item1  = FactoryGuy.make("item", {state:"submitted", offer: offer1});
    offer2 = FactoryGuy.make("offer", {state:"under_review"});
    item2  = FactoryGuy.make("item", {state:"accepted", offer: offer2});
    offer3 = FactoryGuy.make("offer", {state:"reviewed"});
    item3  = FactoryGuy.make("item", {state:"accepted", offer: offer3});
    offer4 = FactoryGuy.make("offer", {state:"scheduled"});
    item4  = FactoryGuy.make("item", {state:"accepted", offer: offer4});

    ggv_order1 = FactoryGuy.make("gogovan_order");
    delivery1 = FactoryGuy.make("delivery", { deliveryType: "Gogovan", gogovanOrder: ggv_order1 });
    offer5 = FactoryGuy.make("offer", {state:"scheduled", delivery: delivery1});
    item5  = FactoryGuy.make("item", {state:"accepted", offer: offer5});

    ggv_order2 = FactoryGuy.make("gogovan_active_order", {driverMobile: "12345678"});
    delivery2 = FactoryGuy.make("delivery", { deliveryType: "Gogovan", gogovanOrder: ggv_order2 });
    offer6 = FactoryGuy.make("offer", {state:"scheduled", delivery: delivery2});
    item6  = FactoryGuy.make("item", {state:"accepted", offer: offer6});

    ggv_order3 = FactoryGuy.make("gogovan_completed_order", {driverMobile: "12345678"});
    delivery3 = FactoryGuy.make("delivery", { deliveryType: "Gogovan", gogovanOrder: ggv_order3 });
    offer8 = FactoryGuy.make("offer", {state:"scheduled", delivery: delivery3});
    item7  = FactoryGuy.make("item", {state:"accepted", offer: offer8});

    offer7 = FactoryGuy.make("offer_with_items", {state:"received"});
  },

  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test("for submitted offer", function() {
  visit('/offers/' + offer1.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer1.id + "/transport_details");
    equal($.trim($('.wait_transport').text()), "Transport arrangements can be made once the review is complete.");
  });
});

test("for under review offer", function() {
  visit('/offers/' + offer2.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer2.id + "/transport_details");
    equal($.trim($('.wait_transport').text()), "Transport arrangements can be made once the review is complete.");
    equal($.trim($('.transport-content .row:first').text()), "Items accepted so far (1)");
    equal($(".items_list img").length, 1);
  });
});

test("for reviewed offer", function() {
  visit('/offers/' + offer3.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer3.id + "/transport_details");
    equal($('.transport-content .row:first a').text(), "Arrange Transport");
    equal($('.transport-content .row:first a').attr('href'), "/offers/"+ offer3.id +"/plan_delivery");
    equal($.trim($('.transport-content .row:eq(1)').text()), "Accepted items to be transported");
    equal($(".items_list img").length, 1);
  });
});

test("for scheduled offer", function() {
  visit('/offers/' + offer4.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer4.id + "/transport_details");

    equal($.trim($('.transport-content .row:eq(2)').text()), "Accepted items to be transported");
    equal($(".items_list img").length, 1);
    equal($('.transport-buttons a').length, 2);
  });
});

test("for scheduled offer with pending GGV order state", function() {
  visit('/offers/' + offer5.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer5.id + "/transport_details");

    equal(($.trim($(".delivery-details .row:eq(0)").text()).indexOf('Awaiting Driver Confirmation') >= 0), true);
    equal(($.trim($(".delivery-details .row:eq(0)").text()).indexOf('Driver & vehicle details will appear here once a driver accepts your booking.') > 0), true);

    equal($.trim($('.transport-content .row:eq(2)').text()), "Accepted items to be transported");
    equal($(".items_list img").length, 1);
    equal($('.transport-buttons a').length, 2);
  });
});

test("for scheduled offer with active GGV order state", function() {
  visit('/offers/' + offer6.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer6.id + "/transport_details");

    equal(($.trim($(".transport-content .row:eq(0)").text()).indexOf('Booking Confirmed') >= 0), true);

    // driver name
    equal((($.trim($(".transport-content .row:eq(2)").text())).indexOf(ggv_order2.get('driverName')) > 0), true);

    // driver mobile
    equal((($.trim($(".transport-content .row:eq(3)").text())).indexOf("1234 5678") > 0), true);

    // driver License
    equal((($.trim($(".transport-content .row:eq(4)").text())).indexOf(ggv_order2.get('driverLicense')) > 0), true);

    equal((($.trim($(".transport-content .row:eq(5)").text())).indexOf(ggv_order2.get('price')) > 0), true);

    equal($.trim($('.transport-content .row:eq(6)').text()), "Accepted items to be transported");
    equal($(".items_list img").length, 1);
    equal($('.transport-buttons a').length, 2);
  });
});

test("for scheduled offer with completed GGV order state", function() {
  visit('/offers/' + offer8.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer8.id + "/transport_details");

    equal(($.trim($(".transport-content .row:eq(0)").text()).indexOf('Picked up') >= 0), true);

    // driver name
    equal((($.trim($(".transport-content .row:eq(2)").text())).indexOf(ggv_order3.get('driverName')) > 0), true);

    // driver mobile
    equal((($.trim($(".transport-content .row:eq(3)").text())).indexOf("1234 5678") > 0), true);

    // driver License
    equal((($.trim($(".transport-content .row:eq(4)").text())).indexOf(ggv_order3.get('driverLicense')) > 0), true);

    equal($.trim($('.transport-content .row:eq(6)').text()), "Items picked up by GGV Driver");
    equal($('.transport-buttons a').length, 0);
  });
});


test("cancel booking of scheduled offer with active GGV order state", function() {
  visit('/offers/' + offer6.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer6.id + "/transport_details");

    click(find("a:contains('Cancel Booking')"));
    andThen(function(){
      equal(currentURL(), "/offers/" + offer6.id + "/delivery/" + delivery2.id + "/cancel_booking");
    });
  });
});

test("cancel booking of scheduled offer with pending GGV order state", function() {
  // todo: remove workaround for message box button actions not firing only under test environment
  lookup("service:messageBox").custom = (message, btn1Text, btn1Callback, btn2Text, btn2Callback) => {
    btn2Callback();
  };

  visit('/offers/' + offer5.id + "/transport_details");

  andThen(function() {
    equal(currentURL(), "/offers/" + offer5.id + "/transport_details");
  });

  click("a:contains('Cancel Booking')");
  // confirm prompt invoked, ok automatically called with above workaround

  andThen(function(){
    equal(currentURL(), "/offers/" + offer5.id + "/offer_details");
  });
});

test("for received offer", function() {
  visit('/offers/' + offer7.id + "/transport_details");
  andThen(function() {
    equal(currentURL(), "/offers/" + offer7.id + "/transport_details");
    equal($('.wait_transport').text().trim().indexOf("Goods received on") >= 0, true);
    equal($('.transport-buttons a').length, 0);
  });
});
