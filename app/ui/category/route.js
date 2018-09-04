import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: { start: { refreshModel: true } },
  api: service(),
  model(params) {
    return this.api.getPosts(params);
  }
});
