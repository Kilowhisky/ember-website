import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'website/config/environment';


export default Route.extend({
  session: service(),
  actions: {
    login() {
      // See config options
      // https://auth0.com/docs/libraries/lock/v11/configuration
      const lockOptions = {
        closable: false,
        allowSignUp: false,
        auth: {
          audience: config['ember-simple-auth'].auth0.audience,
          params: {
            scope: 'openid user_metadata'
          }
        },
      };

      this.session.authenticate('authenticator:auth0-lock', lockOptions)
        .then(() => this.transitionTo('admin'));
    }
  }
});
