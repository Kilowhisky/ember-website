import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  api: service(),
  model() {
    // Get or seed the static post into the api
    return this.api.getPost('contact-info').catch(() => {
      const contactInfo = this.api.createLocalPost({ id: 'contact-info' });
      return this.api.savePost(contactInfo, true);
    })
  }
});
