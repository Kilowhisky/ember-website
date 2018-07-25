import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | display-date', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('converts to locale string', async function(assert) {
    const date = new Date()
    this.set('date', date);

    await render(hbs`{{display-date date}}`);

    assert.equal(this.element.textContent.trim(), date.toLocaleDateString());
  });
});
