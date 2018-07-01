import { helper } from '@ember/component/helper';

export function displayDate(params /*, hash*/ ) {
  if (params && params[0]) {
    return params[0].toLocaleDateString();
  }
}

export default helper(displayDate);
