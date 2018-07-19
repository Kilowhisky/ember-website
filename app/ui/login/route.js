import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
  session: service(),
  actions: {
    login() {
      const lockOptions = {
        closable: false,
        allowSignUp: false,
        auth: {
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
