import AjaxService from 'ember-ajax/services/ajax';
import EmberObject from '@ember/object';


export default AjaxService.extend({
  host: 'http://localhost:3000',
  namespace: '/api',

  getPosts(params) {
    return this.request('posts', { data: params })
      .then(x => x.map(this.convertPost));
  },

  getPost(id) {
    return this.request(`posts/${id}`)
      .then(this.convertPost);
  },

  savePost(id, post) {
    const args = {
      data: {
        id: post.id,
        title: post.title,
        content: post.content,
        createdAt: post.createdAt || new Date()
      }
    };
    if (id) {
      return this.put(`posts/${id}`, args).then(this.convertPost)
    } else {
      return this.post('posts', args).then(this.convertPost);
    }
  },

  deletePost(id) {
    return this.delete(`posts/${id}`);
  },

  convertPost({ id, title, content, createdAt }) {
    return EmberObject.create({
      id,
      title,
      content,
      createdAt: new Date(createdAt)
    });
  }

});
