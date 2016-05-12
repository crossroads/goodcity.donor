import Ember from 'ember';
import AjaxPromise from 'goodcity/utils/ajax-promise';
const { getOwner } = Ember;

export default Ember.Component.extend({

  creditCardNumber: null,
  cardExpiryDate: null,
  amount: null,
  disabled: false,
  invalidAmount: false,

  messageBox: Ember.inject.service(),
  i18n: Ember.inject.service(),

  didInsertElement() {
    this.braintreeSetup();
  },

  braintreeSetup() {
    Ember.$("#braintree-dropin-container").empty();
    var token_url = "/braintree/generate_token";
    var add_customer_url = "/braintree/make_transaction ";
    var authToken = this.get('session.authToken');
    var _this = this;
    var initialLoading = getOwner(this).lookup('component:loading').append();
    var message, myIntegration;

    new AjaxPromise(token_url, "GET", authToken)
      .then(data => {
        var token = data.braintree_token;

        braintree.setup(token, "dropin", {
          container: "braintree-dropin-container",
          form: "braintree-checkout-form",

          onReady(integration) {
            initialLoading.destroy();
            myIntegration = integration;
          },

          onPaymentMethodReceived(object) {
            _this.set("invalidAmount", false);

            var amount = _this.get("amount");
            if(!amount || amount.length === 0 || parseFloat(amount) === 0) {
              _this.set("invalidAmount", true);
              return false;
            }

            var loadingView = getOwner(_this).lookup('component:loading').append();
            _this.set("disabled", true);
            new AjaxPromise(add_customer_url, "POST", authToken, { payment_method_nonce: object.nonce, amount: amount })
              .then((response) => {
                loadingView.destroy();
                _this.set("disabled", false);
                _this.set("amount", null);

                if(response.response) {
                  message = _this.get("i18n").t("support.thanks").string;
                  _this.set("session.currentUser.donationAmount", amount);
                  _this.set("session.currentUser.donationDate", moment().toDate());
                } else if (response.error) {
                  message = _this.get("i18n").t("support.display_error") + "<li>" + response.error + "</li>";
                } else {
                  message = _this.get("i18n").t("support.error").string;
                }
                _this.get("messageBox").alert(message.htmlSafe(), () => {
                  myIntegration.teardown(() => _this.braintreeSetup());
                });
              });
          }
        });

      });
  }
});
