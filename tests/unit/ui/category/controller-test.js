import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | category', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:category');
    assert.ok(controller);
  });

  test('showNextPage is correct for more than take count', function(assert) {
    let controller = this.owner.lookup('controller:category');
    controller.model = [1,2,3,4,5];
    assert.ok(controller.showNextPage);
  }),

  test('nextPageStart has the oldest post date', function(assert) {
    let controller = this.owner.lookup('controller:category');
    controller.model = [
      { createdAt: new Date(2018, 9, 15) },
      { createdAt: new Date(2018, 5, 21) },
      { createdAt: new Date(2019, 8, 13) },
      { createdAt: new Date(2017, 10, 31) },
      { createdAt: new Date(2018, 11, 21) }
    ];
    assert.equal(controller.nextPageStart, new Date(2017, 10, 31).toISOString());
  })
});
