import Controller from '@ember/controller';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  email: validator('presence', true),
  subject: validator('presence', true),
  message: validator('presence', true),
  captchaResolved: validator('presence', true)
});

export default Controller.extend(Validations, {
  actions: {
    onCaptchaResolved() {
      this.set('captchaResolved', true);
    },
    contact(message) {
      // TODO: complete this
    }
  }
});
