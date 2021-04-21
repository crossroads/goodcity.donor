import Ember from "ember";
const { getOwner } = Ember;

export default Ember.Route.extend({
  beforeModel() {
    if (this.session.get("isLoggedIn")) {
      if (this.get("session.currentUser")) {
        this.transitionTo("/offers");
      } else {
        getOwner(this)
          .lookup("route:application")
          ._loadDataStore();
      }
    }

    let previousRoutes = this.router.router.currentHandlerInfos;
    let previousRoute = previousRoutes && previousRoutes.pop().name;
    if (previousRoute) {
      this.session.set("backLinkPath", previousRoute);
    } else {
      this.session.set("backLinkPath", "login");
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("backLinkPath", this.session.get("backLinkPath"));
  }
});
