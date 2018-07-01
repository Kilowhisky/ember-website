import Route from '@ember/routing/route';
import $ from 'jquery';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';


export default Route.extend({
  api: service(),
  beforeModel() {
    this._super(...arguments);
    if (typeof tinymce == 'undefined') {
      return $.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  },
  model(params) {
    if (params.post_id == 'new') {
      return EmberObject.create();
    } else {
      return this.api.getPost(params.post_id);
    }
  },
  actions: {
    save(model) {
      this.api.savePost(model.id, model)
        .then(p => this.transitionTo('post', p));
    },
    delete(model) {
      if (confirm('Are you sure?')) {
        this.api.deletePost(model.id)
          .then(() => this.transitionTo('index'));
      }
    }
  }
});
