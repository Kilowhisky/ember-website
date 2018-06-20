import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);
    if (typeof tinymce == 'undefined') {
      return $.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  },
  model(params) {
    if (params.post_id == 'new') {
      return this.store.createRecord('post', {
        created: new Date()
      });
    }
  },
  actions: {
    save(model){
      model.save().then(post => {
        this.transitionTo('post', post);
      })
    }
  }
});
