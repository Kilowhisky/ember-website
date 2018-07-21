import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * The default route is to the blog.
   */
  beforeModel() {
    this.transitionTo('category', 'blog');
  }
});
