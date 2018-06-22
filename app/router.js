import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function(){
    this.route('post', { path: '/post/:post_id' });
    this.route('login');
  });
  this.route('post', { path: '/:post_id'});
  this.route('contact');
});

export default Router;
