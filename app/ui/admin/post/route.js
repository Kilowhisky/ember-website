import Route from '@ember/routing/route';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { dasherize } from '@ember/string';


export default Route.extend({
  notifications: service('notification-messages'),
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
      post: isNew ? this.api.createLocalPost() : this.api.getPost(params.post_id),
      editorOptions: {
        plugins: "code codesample textcolor colorpicker link",
        codesample_languages: [
          { text: 'HTML/XML', value: 'markup' },
          { text: 'JavaScript', value: 'javascript' },
          { text: 'CSS', value: 'css' },
          { text: 'PHP', value: 'php' },
          { text: 'Ruby', value: 'ruby' },
          { text: 'Python', value: 'python' },
          { text: 'Java', value: 'java' },
          { text: 'C', value: 'c' },
          { text: 'C#', value: 'csharp' },
          { text: 'C++', value: 'cpp' }
        ],
        toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright | link image',
        toolbar2: 'code codesample forecolor backcolor link'
      }
    });
  },
  actions: {
    save(model) {
      this.api.savePost(model.post, model.isNew)
        .then(p => {
          this.send('reloadCategories');
          this.transitionTo('post', p.category, p.id);
        })
        .catch(e => this.notifications.error(e.message));
    },
    delete(model) {
      if (confirm('Are you sure?')) {
        this.api.deletePost(model.post.id)
          .then(() => {
            this.send('reloadCategories');
            this.transitionTo('index');
          });
      }
    },
    updateSlug(model) {
      model.post.set('id', dasherize(model.post.title));
    }
  }
});
