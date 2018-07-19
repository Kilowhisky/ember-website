
/**
 * Inject service into controllers so we don't have to create controllers in order to just inject
 * @see https://guides.emberjs.com/release/applications/dependency-injection/
 */
export function initialize(application ) {
  application.inject('controller', 'session', 'service:session');
}

export default {
  initialize
};
