import AjaxService from 'ember-ajax/services/ajax';
import EmberObject from '@ember/object';
import { merge } from '@ember/polyfills';
import config from 'website/config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';


export default AjaxService.extend({
  session: service(),
  host: config.API.host,
  namespace: config.API.namespace,
  headers: computed('session.isAuthenticated', function() {
    if (this.session.isAuthenticated) {
      const data = this.session.data.authenticated;
      return {
        Authorization: `${data.tokenType} ${data.accessToken}`
      }
    }
    return {};
  }),

  getPostCategories(){
    return this.request('posts/categories');
  },

  createLocalPost(args = {}) {
    return merge({
      createdAt: new Date()
    }, args);
  },

  getPosts(params) {
    return this.request('posts', { data: params })
      .then(x => x.map(this.convertPost));
  },

  getPost(id) {
    return this.request(`posts/${id}`)
      .then(this.convertPost);
  },

  savePost({ id, title, content, createdAt, category }, isNew = false) {
    const args = {
      data: {
        id: id.trim(),
        title,
        content,
        category,
        createdAt: (createdAt || new Date()).toISOString()
      }
    };
    if (isNew) {
      return this.post('posts', args).then(this.convertPost);
    } else {
      return this.put(`posts/${id}`, args).then(this.convertPost);
    }
  },

  deletePost(id) {
    return this.delete(`posts/${id}`);
  },

  convertPost({ id, title, content, createdAt, category }) {
    return EmberObject.create({
      id,
      title,
      content,
      category,
      createdAt: new Date(createdAt)
    });
  }
});
