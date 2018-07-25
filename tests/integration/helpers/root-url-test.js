import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import env from 'website/config/environment';

module('Integration | Helper | rootURL', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    await render(hbs`{{root-url}}`);

    assert.equal(this.element.textContent.trim(), env.rootURL);
  });
});
