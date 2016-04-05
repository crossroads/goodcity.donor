import Ember from 'ember';
import startApp from '../helpers/start-app';
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var App, offer, offer1, offer2, item, item1, item2, item3, offer3, offer4, item3, item4, del,
  del1, del2, offer5, item5, del3, offer6, item6, ggvOrder, ggvOrder1, ggvOrder2, del4, offer7, item7;

module('Offer Index View', {
  beforeEach: function() {
    // offers must be created by the logged in user in order to be shown in the index
    App = startApp();
    TestHelper.setup();
    var currentUserId = JSON.parse(window.localStorage.currentUserId);
    var user = FactoryGuy.make("user", {id:currentUserId});

    offer = FactoryGuy.make("offer", {state:"under_review", createdBy:user});
    item = FactoryGuy.make("item", {state:"accepted", offer: offer});

    offer1 = FactoryGuy.make("offer", {state:"reviewed", createdBy:user});
    item1 = FactoryGuy.make("item", {state:"accepted", offer: offer1});

    offer2 = FactoryGuy.make("offer", {state:"closed", createdBy:user});
    item2 = FactoryGuy.make("item", {state:"accepted", offer: offer2});

    del = FactoryGuy.make("delivery", {deliveryType:"Drop Off"});
    offer3 = FactoryGuy.make("offer", {state:"scheduled", delivery: del, createdBy:user});
    item3 = FactoryGuy.make("item", {state:"accepted", offer: offer3});

    del1 = FactoryGuy.make("delivery", {deliveryType:"Alternate"});
    offer4 = FactoryGuy.make("offer", {state:"scheduled", delivery: del1, createdBy:user});
    item4 = FactoryGuy.make("item", {state:"accepted", offer: offer4});

    ggvOrder = FactoryGuy.make("gogovan_order");
    del2 = FactoryGuy.make("delivery", {deliveryType:"Gogovan", gogovanOrder: ggvOrder});
    offer5 = FactoryGuy.make("offer", {state:"scheduled", delivery: del2, createdBy:user});
    item5 = FactoryGuy.make("item", {state:"accepted", offer: offer5});

    ggvOrder1 = FactoryGuy.make("gogovan_active_order");
    del3 = FactoryGuy.make("delivery", {deliveryType:"Gogovan", gogovanOrder: ggvOrder1});
    offer6 = FactoryGuy.make("offer", {state:"scheduled", delivery: del3, createdBy:user});
    item6 = FactoryGuy.make("item", {state:"accepted", offer: offer6});

    ggvOrder2 = FactoryGuy.make("gogovan_completed_order");
    del4 = FactoryGuy.make("delivery", {deliveryType:"Gogovan", gogovanOrder: ggvOrder2});
    offer7 = FactoryGuy.make("offer", {state:"scheduled", delivery: del4, createdBy:user});
    item7 = FactoryGuy.make("item", {state:"accepted", offer: offer7});

  },
  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test('Offers list & link to add items', function() {
  visit('/offers');

  andThen(function() {
    equal(currentURL(), "/offers");

    var checkLink = function(offerId, expectedText) {
      var url = "/offers/" + offerId + "/offer_details";
      var foundText = Ember.$("a[href='" + url + "'] h3").text();
      ok(foundText.indexOf(expectedText) > -1, "Found: " + foundText + " => Expected: " + expectedText);
    };

    checkLink(offer.id, "In review");
    checkLink(offer1.id, "Please arrange transport");
    checkLink(offer2.id, "Closed");
    checkLink(offer3.id, "You will deliver to Crossroads");
    checkLink(offer4.id, "Crossroads collection booked");
    checkLink(offer5.id, "Van booked");
    checkLink(offer6.id, "Van confirmed");
    checkLink(offer7.id, "Picked up");

    // test: link to complete offers
    equal(find("a:contains('Make a New Donation')").length > 0, true);
  });
});
