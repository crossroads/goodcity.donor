import Ember from "ember";
import AsyncMixin from "../mixins/async";

export default Ember.Controller.extend(AsyncMixin, {
  messageBox: Ember.inject.service(),
  application: Ember.inject.controller(),

  isEditing: false,

  user: Ember.computed.alias("model.user"),

  fields: [
    {
      key: "firstName",
      editable: true
    },
    {
      key: "lastName",
      editable: true
    },
    {
      key: "mobile",
      editable: false
    }
  ],

  actions: {
    startEditing() {
      this.set("isEditing", true);
    },

    cancelEdit() {
      this.get("user").rollbackAttributes();
      this.set("isEditing", false);
    },

    saveEdit() {
      const fields = this.get("fields");
      const user = this.get("user");

      for (const field of fields) {
        const { key } = field;

        if (!user.get(key)) {
          return; // we won't save anything blank
        }
      }

      return this.runTask(() => {
        return user.save().then(() => {
          this.set("isEditing", false);
        });
      }, this.ERROR_STRATEGIES.MODAL);
    },

    gotoDeleteAccount() {
      this.transitionToRoute("delete_account");
    }
  }
});
