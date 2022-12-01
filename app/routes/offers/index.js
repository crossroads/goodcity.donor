import AuthorizeRoute from "./../authorize";

export default AuthorizeRoute.extend({
  queryParams: {
    noRedirect: false
  },

  model() {
    let cachedRecords = this.store.peekAll("offer");
    if (cachedRecords.get("length")) {
      return cachedRecords;
    }

    return this.get("store").query("offer", { exclude_messages: "true" });
  },

  afterModel(model) {
    this.store.query("message", {
      messageable_type: "Offer",
      messageable_id: model.getEach("id")
    });
  },

  redirect(my_offers, transition) {
    if ([true, "true"].contains(transition.queryParams.noRedirect)) {
      return;
    }

    var route = this;
    switch (my_offers.get("length")) {
      case 0:
        route.transitionTo("offers.new");
        break;
      case 1:
        if (my_offers.get("firstObject.state") === "draft") {
          var firstOffer = my_offers.get("firstObject");
          if (firstOffer.get("itemCount") === 0) {
            route.transitionTo("offer", firstOffer);
          } else {
            route.transitionTo("offer.offer_details", firstOffer);
          }
        }
    }
  },

  renderTemplate() {
    this.render(); // default template
    this.render("appMenuList", {
      into: "offers/index",
      outlet: "appMenuList",
      controller: "application"
    });
  }
});
