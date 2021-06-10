import Ember from "ember";
import AjaxPromise from "goodcity/utils/ajax-promise";

export default Ember.Controller.extend({
  init() {
    let _this = this;

    Ember.run.later(
      this,
      function() {
        var stripeElements = function(publicKey, setupIntent) {
          var stripe = Stripe(publicKey);
          var elements = stripe.elements();

          // Element styles
          var style = {
            base: {
              fontSize: "16px",
              color: "#32325d",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
              fontSmoothing: "antialiased",
              "::placeholder": {
                color: "rgba(0,0,0,0.4)"
              }
            }
          };

          var card = elements.create("card", { style: style });

          card.mount("#card-element");

          // Element focus ring
          card.on("focus", function() {
            var el = document.getElementById("card-element");
            el.classList.add("focused");
          });

          card.on("blur", function() {
            var el = document.getElementById("card-element");
            el.classList.remove("focused");
          });

          // Handle payment submission when user clicks the pay button.
          var button = document.getElementById("submit");
          button.addEventListener("click", function(event) {
            event.preventDefault();
            changeLoadingState(true);
            var email = document.getElementById("email").value;

            stripe
              .confirmCardSetup(setupIntent.client_secret, {
                payment_method: {
                  card: card,
                  billing_details: { email: email }
                }
              })
              .then(function(result) {
                if (result.error) {
                  changeLoadingState(false);
                  var displayError = document.getElementById("card-errors");
                  displayError.textContent = result.error.message;
                } else {
                  savePaymentMethodDetails(result);
                  // The PaymentMethod was successfully set up
                  orderComplete(stripe, setupIntent.client_secret);
                }
              });
          });
        };

        var savePaymentMethodDetails = function(paymentMethodResponse) {
          new AjaxPromise(
            "/stripe/save_payment_method",
            "POST",
            _this.get("session.authToken"),
            {
              stripe_response: paymentMethodResponse["setupIntent"],
              source_id: 1,
              source_type: "transport_order",
              authorize_amount: true
            }
          );
        };

        var getSetupIntent = function(publicKey) {
          return new AjaxPromise(
            "/stripe/create_setupintent",
            "POST",
            _this.get("session.authToken"),
            {}
          )
            .then(data => stripeElements(publicKey, data))
            .catch(xhr => {
              if (xhr.status === 422) {
                this.get("messageBox").alert(xhr.responseJSON.errors);
              } else {
                throw xhr;
              }
            });
        };

        var getPublicKey = function() {
          return new AjaxPromise(
            "/stripe/fetch_public_key",
            "GET",
            _this.get("session.authToken"),
            {}
          )
            .then(data => getSetupIntent(data.publicKey))
            .catch(xhr => {
              if (xhr.status === 422) {
                this.get("messageBox").alert(xhr.responseJSON.errors);
              } else {
                throw xhr;
              }
            });
        };

        // Show a spinner on payment submission
        var changeLoadingState = function(isLoading) {
          if (isLoading) {
            document.querySelector("button").disabled = true;
            document.querySelector("#spinner").classList.remove("hidden");
            document.querySelector("#button-text").classList.add("hidden");
          } else {
            document.querySelector("button").disabled = false;
            document.querySelector("#spinner").classList.add("hidden");
            document.querySelector("#button-text").classList.remove("hidden");
          }
        };

        /* Shows a success / error message when the payment is complete */
        var orderComplete = function(stripe, clientSecret) {
          stripe.retrieveSetupIntent(clientSecret).then(function(result) {
            var setupIntent = result.setupIntent;
            var setupIntentJson = JSON.stringify(setupIntent, null, 2);

            document.querySelector(".sr-payment-form").classList.add("hidden");
            document.querySelector(".sr-result").classList.remove("hidden");
            document.querySelector("pre").textContent = setupIntentJson;
            setTimeout(function() {
              document.querySelector(".sr-result").classList.add("expand");
            }, 200);

            changeLoadingState(false);
          });
        };

        getPublicKey();
      },
      1000
    );
  }
});
