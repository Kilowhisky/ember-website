import { helper } from '@ember/component/helper';
import env from '../config/environment';

export function rootURL(/* params, hash*/) {
  return env.rootURL;
}

export default helper(rootURL);
