import Ember from 'ember';
import AsyncMixin from "../mixins/async";
import AjaxPromise from "../utils/ajax-promise";

export default Ember.Controller.extend(AsyncMixin, {
  messageBox: Ember.inject.service(),
  session: Ember.inject.service(),
  application: Ember.inject.controller(),

  isEditing: false,

  user: Ember.computed.alias('session.loggedInUser'),

  fields: [
    {
      key: "title",
      editable: true
    },
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
    },
    {
      key: "email",
      editable: false
    }
  ],

  actions: {
    startEditing() {
      this.set('isEditing', true);
    },

    cancelEdit() {
      this.get("user").rollbackAttributes();
      this.set('isEditing', false);
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
        return user.save()
          .then(() => {
            this.set('isEditing', false);
          });
      }, this.ERROR_STRATEGIES.MODAL);
    },

    tryDeleteAccount() {
      this.modalConfirm("account.confirm_deletion", "confirm", () => {
        const userId = this.get("user.id");

        this.runTask(() => 
          new AjaxPromise(`/users/${userId}`, "DELETE", null)
            .then(() => {
              this.get("application").send("logMeOut");
            }),
           this.ERROR_STRATEGIES.MODAL
        );
      });
    }
  }
});
