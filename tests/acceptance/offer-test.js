import Ember from 'ember';
import startApp from '../helpers/start-app';
import syncDataStub from '../helpers/empty-sync-data-stub';
import FactoryGuy from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

var App, store, offer, item1, item2, image;

module('Display Offer', {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
    store = FactoryGuy.store;
    syncDataStub(TestHelper);

    offer = FactoryGuy.make("offer");
    item1 = FactoryGuy.make("item", {offer:offer,state:"submitted"});
    item2 = FactoryGuy.make("item", {offer:offer,state:"submitted"});
    image = FactoryGuy.make("image", {item:item1,favourite:true});
  },

  afterEach: function() {
    Em.run(function() { TestHelper.teardown(); });
    Ember.run(App, 'destroy');
  }
});

test("Display offer details", function() {
  visit('/offers/' + offer.id + "/offer_details");

  andThen(function() {
    // offer show page
    equal(currentURL(), "/offers/" + offer.id + "/offer_details");
    equal($.trim(find('.tab-bar-section .title').text()), "Offer Details");

    // add-item & remove-item buttons and confirm offer link
    // equal(find("a:contains('Add Item')").length, 1);
    equal(find("a[href='/offers/" + offer.id + "/confirm']").length, 1);

    // list of all items
    equal(find('.item-content li img.cl-item-image').length, 2);

    // favourite image for 'item2': default image
    equal(find('img[src="assets/images/default_item.jpg"]').length, 1);

    // favourite image for 'item': image2
    equal(find("img[src='" + image.get("thumbImageUrl") + "']").length, 1);
  });
});

test("Confirm and Submit Offer", function(){
  visit("/offers/" + offer.id + "/offer_details");
  click("a[href='/offers/"+ offer.id +"/confirm']");

  andThen(function() {
    equal($('h1.title').text().toLowerCase(), "confirm");
    equal(currentURL(), "/offers/" + offer.id + "/confirm");

    // confirm offer page has submit link
    equal(find("a:contains('Next')").length, 1);

    click("a:contains('Next')");

    andThen(function() {
      equal($('h1.title').text().toLowerCase(), "sale of goods");
      equal(currentURL(), "/offers/" + offer.id + "/submit");


      click("button:contains('Yes')");

      andThen(function() {
        equal(currentURL(), "/offers/" + offer.id + "/offer_details");
      });
    });
  });
});
