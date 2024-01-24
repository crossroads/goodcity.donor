import Ember from "ember";
import AsyncMixin from "../mixins/async";
import AjaxPromise from "../utils/ajax-promise";

export default Ember.Controller.extend(AsyncMixin, {
  user: Ember.computed.alias("model.user"),
  application: Ember.inject.controller(),

  offers: Ember.computed(function() {
    return this.store.peekAll("offer");
  }),

  activeOffersCount: Ember.computed("offers.@each.state", function() {
    const inactiveStates = ["draft", "cancelled", "closed", "inactive"];
    const filteredOffers = this.get("offers").filter(
      offer => !inactiveStates.includes(offer.get("state"))
    );
    const count = filteredOffers.length;
    return count;
  }),

  canDeleteAccount: Ember.computed("activeOffersCount", function() {
    return this.get("activeOffersCount") === 0;
  }),

  actions: {
    viewOffers() {
      this.transitionToRoute("offers");
    },

    cancelAccountDeletion() {
      this.transitionToRoute("account");
    },

    confirmDeleteAccount() {
      this.runTask(async () => {
        const userId = this.get("user.id");
        const data = await new AjaxPromise(
          `/users/${userId}`,
          "DELETE",
          this.get("session.authToken")
        );
        this.get("application").send("logMeOut");
      }, this.ERROR_STRATEGIES.MODAL);
    }
  }
});
