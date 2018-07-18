import Route from '@ember/routing/route';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';


export default Route.extend({
  api: service(),
  beforeModel() {
    this._super(...arguments);
    if (typeof tinymce == 'undefined') {
      return $.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  },
  model(params) {
    const isNew = params.post_id == 'new';
    return hash({
      isNew,
      post: isNew ? this.api.createLocalPost({ category: 'blog' }) : this.api.getPost(params.post_id)
    });
  },
  actions: {
    save(model) {
      this.api.savePost(model.post, model.isNew)
        .then(p => this.transitionTo('post', p));
    },
    delete(model) {
      if (confirm('Are you sure?')) {
        this.api.deletePost(model.post.id)
          .then(() => this.transitionTo('index'));
      }
    }
  }
});
