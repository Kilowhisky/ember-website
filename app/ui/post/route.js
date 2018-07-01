import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  api: service(),
  model(params) {
    return this.api.getPost(params.post_id);
  }
});
