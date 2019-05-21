/* jshint node: true */
const pkgJson = require("../package.json");

module.exports = function(environment) {
  var ENV = {
    modulePrefix: "goodcity",
    environment: environment,
    baseURL: "/",
    defaultLocationType: "auto",

    emberRollbarClient: {
      enabled: environment !== "test" && environment !== "development",
      accessToken: "9db40d21a058461081ac9b666f59cd8b",
      verbose: true,
      ignoredMessages: ["TransitionAborted"],
      payload: {
        client: {
          javascript: {
            source_map_enabled: true, //this is now true by default
            code_version: require("child_process")
              .execSync("git rev-parse HEAD")
              .toString()
              .trim(),
            // Optionally have Rollbar guess which frames the error was thrown from
            // when the browser does not provide line and column numbers.
            environment: environment,
            guess_uncaught_frames: false
          }
        }
      }
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      "default-src": "'self' gap://ready file://* *",
      "img-src": "'self' data: https://res.cloudinary.com filesystem: *",
      "style-src": "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com",
      "font-src": "'self' data: https://maxcdn.bootstrapcdn.com",
      "script-src":
        "'self' 'unsafe-inline' 'unsafe-eval' https://widget.uservoice.com https://by2.uservoice.com https://api.sandbox.braintreegateway.com https://client-analytics.sandbox.braintreegateway.com",
      "frame-src":
        "'self' 'unsafe-inline' 'unsafe-eval' https://widget.uservoice.com https://assets.braintreegateway.com https://checkout.paypal.com"
    },
    APP: {
      // Cloudinary Keys
      NAME: "app.goodcity",
      TITLE: "GoodCity",
      BANNER_IMAGE: "/assets/images/donor.png",
      APPLE_APP_ID: "1012253845",
      REVIEW_APP_NAME: "GoodCity",
      CLOUD_NAME: "ddoadcjjl",
      ANDROID_APP_URL: "market://details?id=hk.goodcity.app",
      CLOUD_API_KEY: 926849638736153,
      CLOUD_URL: "https://api.cloudinary.com/v1_1/ddoadcjjl/auto/upload",
      IMAGE_PATH: "http://res.cloudinary.com/ddoadcjjl/image/upload/",
      HK_COUNTRY_CODE: "+852",
      GOGOVAN_CONTACT: "3590 3399",
      CROSSROADS_CONTACT: "2272 9345",
      GMAP_URL:
        "https://www.google.com.hk/maps/place/22%C2%B022'27.9%22N+113%C2%B059'36.1%22E/@22.3744154,113.9758515,14z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0",
      // RESTAdapter Settings
      NAMESPACE: "api/v1",
      CONTACT_EMAIL: "info@goodcity.hk",

      PRELOAD_TYPES: ["territory"],
      PRELOAD_AUTHORIZED_TYPES: [
        "donor_condition",
        "permission",
        "timeslot",
        "gogovan_transport",
        "crossroads_transport",
        "version"
      ],
      SHA: process.env.APP_SHA || "00000000",
      SHARED_SHA: process.env.APP_SHARED_SHA || "00000000",
      VERSION: pkgJson.version || "1.0.0",
      ANDROID_APP_ID: "hk.goodcity.app",
      IOS_APP_ID: "1012253845"
    },

    cordova: {
      enabled: process.env.EMBER_CLI_CORDOVA !== "0",
      rebuildOnChange: false,
      emulate: false,
      FcmSenderId: "161361907015"
    },
    coffeeOptions: {
      blueprints: false
    },
    i18n: {
      defaultLocale: "en"
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // RESTAdapter Settings
    ENV.APP.API_HOST_URL = "http://localhost:3000";
    ENV.APP.SOCKETIO_WEBSERVICE_URL = "http://localhost:1337/goodcity";

    ENV.contentSecurityPolicy["connect-src"] = [
      "http://localhost:4200",
      "http://localhost:3000",
      "http://localhost:1337",
      "ws://localhost:1337",
      "wss://localhost:1337",
      "https://api.cloudinary.com"
    ].join(" ");
    //Only added for development env. to fix issue related to BLOB: object
    ENV.contentSecurityPolicy["img-src"] = [
      "http://localhost:4200",
      "data: https://res.cloudinary.com",
      "blob: filesystem/g",
      "filesystem: *"
    ].join(" ");
  }

  if (environment === "test") {
    ENV.cordova.enabled = false;
    // Testem prefers this...
    ENV.baseURL = "/";
    ENV.locationType = "auto";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";

    // RESTAdapter Settings
    ENV.APP.API_HOST_URL = "http://localhost:4200";
  }

  if (environment === "production") {
    // RESTAdapter Settings
    ENV.APP.API_HOST_URL = "https://api.goodcity.hk";
    ENV.APP.SOCKETIO_WEBSERVICE_URL = "https://socket.goodcity.hk:81/goodcity";

    ENV.contentSecurityPolicy["connect-src"] = [
      "https://app.goodcity.hk",
      "https://api.goodcity.hk",
      "https://socket.goodcity.hk:81",
      "ws://socket.goodcity.hk:81",
      "wss://socket.goodcity.hk:81",
      "https://api.cloudinary.com",
      "https://errbit.crossroads.org.hk"
    ].join(" ");

    ENV.googleAnalytics = { webPropertyId: "UA-62978462-1" };
    ENV.cordova.FcmSenderId = "919797298115";
  }

  if ((process.env.staging || process.env.STAGING) === "true") {
    ENV.staging = true;
    ENV.APP.API_HOST_URL = "https://api-staging.goodcity.hk";
    ENV.APP.SOCKETIO_WEBSERVICE_URL =
      "https://socket-staging.goodcity.hk:81/goodcity";
    ENV.contentSecurityPolicy["connect-src"] = [
      "https://app-staging.goodcity.hk",
      "https://api-staging.goodcity.hk",
      "https://socket-staging.goodcity.hk:81",
      "ws://socket-staging.goodcity.hk:81",
      "wss://socket-staging.goodcity.hk:81",
      "https://api.cloudinary.com",
      "https://errbit.crossroads.org.hk"
    ].join(" ");

    ENV.googleAnalytics = { webPropertyId: "UA-62978462-4" };
    ENV.cordova.FcmSenderId = "161361907015";

    // VSO build
    if (process.env.BUILD_BUILDNUMBER) {
      ENV.APP.VERSION =
        process.env.VERSION + "." + process.env.BUILD_BUILDNUMBER;
      ENV.APP.APP_SHA = process.env.BUILD_SOURCEVERSION;
    }
  } else {
    ENV.staging = false;
  }

  ENV.APP.SERVER_PATH = ENV.APP.API_HOST_URL + "/" + ENV.APP.NAMESPACE;

  return ENV;
};
