import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  api: service(),
  model() {
    return this.api.getPostCategories();
  },
  actions: {
    logout() {
      this.session.invalidate();
    },
    reloadCategories(){
      this.refresh();
    }
  }
});
