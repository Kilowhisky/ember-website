import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['start'],
  start: null,
  take: 5,

  /**
   * Show the next page button if the model is greater than the maximum count
   */
  showNextPage: computed('take', 'model.[]', function(){
    return this.model.length >= this.take;
  }),

  /**
   * The next page should start at the date of the last pagged post
   */
  nextPageStart: computed('model.[]', function(){
    return this.model.sortBy('createdAt').firstObject.createdAt.toISOString();
  })
});
