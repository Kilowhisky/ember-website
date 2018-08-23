import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  displayDate: computed('model.post.createdAt', {
    get(){
      return this.model.post.createdAt.toISOString();
    },
    set(key, value){
      this.model.post.set('createdAt', new Date(value));
      return value;
    }
  })
});
