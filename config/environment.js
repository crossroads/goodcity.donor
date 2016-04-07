/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'goodcity',
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      "img-src": "'self' data: https://res.cloudinary.com filesystem: *",
      "style-src": "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com",
      "font-src": "'self' data: https://maxcdn.bootstrapcdn.com",
      "script-src": "'self' 'unsafe-eval' https://widget.uservoice.com https://by2.uservoice.com https://api.sandbox.braintreegateway.com https://client-analytics.sandbox.braintreegateway.com",
      "frame-src": "'self' 'unsafe-eval' https://widget.uservoice.com https://assets.braintreegateway.com https://checkout.paypal.com"
    },
    APP: {
      // Cloudinary Keys
      NAME: 'app.goodcity',
      CLOUD_NAME: 'ddoadcjjl',
      CLOUD_API_KEY: 926849638736153,
      CLOUD_URL: 'https://api.cloudinary.com/v1_1/ddoadcjjl/auto/upload',
      IMAGE_PATH: 'http://res.cloudinary.com/ddoadcjjl/image/upload/',
      HK_COUNTRY_CODE: '+852',
      GOGOVAN_CONTACT: '3590 3399',
      GMAP_URL: "https://www.google.com.hk/maps/place/22%C2%B022'30.7%22N+113%C2%B059'33.7%22E/@22.375196,113.992684,19z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0",
      // RESTAdapter Settings
      NAMESPACE: 'api/v1',
      CONTACT_EMAIL: 'info@goodcity.hk',

      PRELOAD_TYPES: ["territory"],
      PRELOAD_AUTHORIZED_TYPES: ["donor_condition","permission", "timeslot", "gogovan_transport", "crossroads_transport", "version"],
      SHA: process.env.APP_SHA || "00000000",
      SHARED_SHA:  process.env.APP_SHARED_SHA || "00000000",
      VERSION: process.env.VERSION || "1.0.0",

      AIRBRAKE_HOST: "https://errbit.crossroads.org.hk",
      AIRBRAKE_PROJECT_ID: 0,
      AIRBRAKE_PROJECT_KEY: "010f0d73f56efb6150cb2744e814e46b"
    },

    cordova: {
      enabled: process.env.EMBER_CLI_CORDOVA !== '0',
      rebuildOnChange: false,
      emulate: false,
      GcmSenderId: '161361907015'
    },
    coffeeOptions: {
      blueprints: false
    },
    i18n: {
      defaultLocale: 'en'
    }
  };

  if (environment === 'development') {

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // RESTAdapter Settings
    ENV.APP.API_HOST_URL = 'http://localhost:3000';
    ENV.APP.SOCKETIO_WEBSERVICE_URL = 'http://localhost:1337/goodcity';

    ENV.contentSecurityPolicy["connect-src"] = [
      'http://localhost:4200',
      'http://localhost:3000',
      'http://localhost:1337',
      'ws://localhost:1337',
      'wss://localhost:1337',
      'https://api.cloudinary.com'
    ].join(' ');
    //Only added for development env. to fix issue related to BLOB: object
    ENV.contentSecurityPolicy["img-src"] = [
      'http://localhost:4200',
      'data: https://res.cloudinary.com',
      'blob: filesystem/g',
      'filesystem: *'
    ].join(' ');
  }

  if (environment === 'test') {
    ENV.cordova.enabled = false;
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    // RESTAdapter Settings
    ENV.APP.API_HOST_URL = 'http://localhost:4200';
  }

  if (environment === 'production') {
    // RESTAdapter Settings
    ENV.APP.API_HOST_URL = 'https://api.goodcity.hk';
    ENV.APP.SOCKETIO_WEBSERVICE_URL = 'https://socket.goodcity.hk:81/goodcity';

    ENV.contentSecurityPolicy["connect-src"] = [
      'https://app.goodcity.hk',
      'https://api.goodcity.hk',
      'https://socket.goodcity.hk:81',
      'ws://socket.goodcity.hk:81',
      'wss://socket.goodcity.hk:81',
      'https://api.cloudinary.com',
      'https://errbit.crossroads.org.hk'
    ].join(' ');

    ENV.googleAnalytics = { webPropertyId: 'UA-62978462-1' };
    ENV.cordova.GcmSenderId = '919797298115';
  }

  if ((process.env.staging || process.env.STAGING) === 'true') {
    ENV.staging = true;
    ENV.APP.API_HOST_URL = 'https://api-staging.goodcity.hk';
    ENV.APP.SOCKETIO_WEBSERVICE_URL = 'https://socket-staging.goodcity.hk:81/goodcity';
    ENV.contentSecurityPolicy["connect-src"] = [
      'https://app-staging.goodcity.hk',
      'https://api-staging.goodcity.hk',
      'https://socket-staging.goodcity.hk:81',
      'ws://socket-staging.goodcity.hk:81',
      'wss://socket-staging.goodcity.hk:81',
      'https://api.cloudinary.com',
      'https://errbit.crossroads.org.hk'
    ].join(' ');

    ENV.googleAnalytics = { webPropertyId: 'UA-62978462-4' };
    ENV.cordova.GcmSenderId = '161361907015';

    // VSO build
    if (process.env.BUILD_BUILDNUMBER) {
      ENV.APP.VERSION = process.env.VERSION + "." + process.env.BUILD_BUILDNUMBER;
      ENV.APP.APP_SHA = process.env.BUILD_SOURCEVERSION;
    }
  } else {
    ENV.staging = false;
  }

  ENV.APP.SERVER_PATH  = ENV.APP.API_HOST_URL + '/' + ENV.APP.NAMESPACE;

  return ENV;
};
