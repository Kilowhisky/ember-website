import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('front-end', { path: '/' }, function() {
    this.route('post', { path: '/:post_id' });
  });
});

export default Router;
