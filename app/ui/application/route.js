import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  notifications: service('notification-messages'),
  actions: {
    logout() {
      this.session.invalidate();
      this.notifications.success('Logged Out', { autoClear: true });
    }
  }
});
