import Ember from "ember";
import AuthorizeRoute from "./authorize";

export default AuthorizeRoute.extend({
  session: Ember.inject.service(),

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("isEditing", false);

    const user = this.get("session").get("loggedInUser");
    const mobile = user.get("mobile");

    if (!/^\+852/.test(mobile)) {
      //  @tofix hack, we should really be keeping the country code in order to save the records
      user.set("mobile", "+852" + mobile);
    }
  },

  renderTemplate() {
    this.render(); // default template

    if (this.get("session.isLoggedIn")) {
      this.render("appMenuList", {
        into: "account",
        outlet: "appMenuList",
        controller: "application"
      });
    }
  }
});
