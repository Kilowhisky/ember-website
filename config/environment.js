'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'website',
    podModulePrefix: 'website/ui',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API: {
      host: 'http://localhost:5000',
      namespace: '/api'
    },

    'ember-simple-auth': {
      authenticationRoute: 'login',
      auth0: {
        audience: 'https://wetzelrice.auth0.com/api/v2/',
        clientID: 'DPtw6Wy0NrKW63PYJ09lHtRO0bLC4QZH',
        domain: 'wetzelrice.auth0.com',
        logoutReturnToURL: '/login',
        enableImpersonation: false
      }
    },

    googleFonts: [
      'Share Tech Mono',
      'Ubuntu',
    ],

    disqus: {
      shortname: 'wetzelrice'
    },

    // Don't load the tinyMCE editor as we don't need it unless we are editing.
    tinyMCE: {
      load: false
    },

    gReCaptcha: {
      jsUrl: 'https://www.google.com/recaptcha/api.js?render=explicit', // default
      siteKey: '6LeYpl8UAAAAACnhpBunz3FSI0eSuZNqdEKV0K8_'
    },

    contentSecurityPolicy: {
      'font-src': "'self' data: https://*.auth0.com fonts.gstatic.com cdn.tinymce.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com cdn.tinymce.com c.disquscdn.com",
      'script-src': "'self' 'unsafe-eval' https://*.auth0.com code.createjs.com *.google.com www.gstatic.com cdn.tinymce.com *.disqus.com disqus.com c.disquscdn.com",
      'img-src': '*',
      'connect-src': "'self' http://localhost:* https://wetzelrice.auth0.com",
      'default-src': "www.google.com disqus.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
