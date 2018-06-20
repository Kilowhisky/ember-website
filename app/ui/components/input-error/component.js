import Component from '@ember/component';
import { get, observer } from '@ember/object';

export default Component.extend({
  didInsertElement(){
    this.updateField();
  },
  updateField: observer('errors.[]', function() {
    const inputs = this.$().parent().children('input,textarea');
    if (get(this, 'errors.length')) {
      inputs.addClass('is-danger');
    } else {
      inputs.removeClass('is-danger');
    }
  })
});
