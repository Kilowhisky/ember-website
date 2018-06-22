import Controller from '@ember/controller';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  password: validator('presence', true)
});

export default Controller.extend(Validations);
