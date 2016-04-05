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
    var token_url = "/braintree/generate_token";
    var add_customer_url = "/braintree/make_transaction ";
    var authToken = this.get('session.authToken');
    var _this = this;
    var router = this.get("router");
    var initialLoading = getOwner(this).lookup('component:loading').append();
    var message;

    new AjaxPromise(token_url, "GET", authToken)
      .then(data => {
        var token = data.braintree_token;

        braintree.setup(token, "dropin", {
          container: "braintree-dropin-container",
          form: "braintree-checkout-form",

          onReady() {
            initialLoading.destroy();
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
                message = response ? _this.get("i18n").t("support.thanks") : _this.get("i18n").t("support.error");
                _this.get("messageBox").alert(message, () => router.transitionTo("offers"));
              });
          }
        });

      });
  }
});
