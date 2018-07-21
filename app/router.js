import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('admin', function() {
    this.route('post', { path: '/post/:post_id' });
  });
  this.route('category', { path: '/:category' });
  this.route('post', { path: '/:category/:post_id' });
  this.route('error');
});

export default Router;
