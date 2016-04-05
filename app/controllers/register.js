import Ember from 'ember';
import AjaxPromise from '../utils/ajax-promise';
import config from '../config/environment';
import { translationMacro as t } from "ember-i18n";
const { getOwner } = Ember;

export default Ember.Controller.extend({
  messageBox: Ember.inject.service(),
  i18n: Ember.inject.service(),
  phoneNumberPlaceholder: t("register.phone_number"),
  fNamePlaceholder: t("register.john"),
  lNamePlaceholder: t("register.doe"),

  actions: {
    registerUser() {
      var loadingView = getOwner(this).lookup('component:loading').append();
      var mobilePhone = config.APP.HK_COUNTRY_CODE + this.get('mobilePhone');
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var district_id = Ember.$('.district-selection').attr('selected_id') || null;
      var user_auth = { mobile: mobilePhone, first_name: firstName, last_name: lastName,
        address_attributes: {district_id: district_id, address_type: "profile"}};

      new AjaxPromise("/auth/signup", "POST", null, {user_auth: user_auth})
        .then(data => {
          this.set('session.otpAuthKey', data.otp_auth_key);
          this.setProperties({mobilePhone:null, firstName:null, lastName:null});
          this.transitionToRoute('/authenticate');
        })
        .catch(xhr => {
          if (xhr.status === 422) {
            this.get("messageBox").alert(xhr.responseJSON.errors);
          } else {
            throw xhr;
          }
        })
        .finally(() => loadingView.destroy());
    }
  }
});
