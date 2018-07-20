/* global createjs */
import Component from '@ember/component';
import { bind, next } from '@ember/runloop';

/**
 * This component creates a random floating 1's and 0's.
 * Kinda based off this https://github.com/CreateJS/EaselJS/blob/master/examples/Cache.html
 */
export default Component.extend({
  tagName: 'canvas',
  classNames: ['code-floater'],

  count: 1000,
  factor: 10,
  stage: null,
  boundTick: null, // Ember bound method handler so it can be unattached later

  init(){
    this._super(...arguments);
    this.resizeService.on('didResize', () => this.updateSize());
  },

  updateSize(){
    const canvas = this.element;
    canvas.width = this.element.offsetWidth;
    canvas.height = this.element.offsetHeight;
    this.stage.update();
  },

  didInsertElement(){
    const canvas = this.element;
    canvas.width = this.element.offsetWidth;
    canvas.height = this.element.offsetHeight;
    this.stage = new createjs.Stage(canvas);

    // create a large number of slightly complex vector shapes, and give them random positions and velocities:
		for (var i = 0; i < this.count; i++) {
      const text = new createjs.Text(i % 2 ? '0' : '1', "16pt 'Share Tech Mono'", 'black');
			text.x = Math.random() * canvas.width;
			text.y = Math.random() * canvas.height;
			text.velX = Math.random();
			text.velY = Math.random();
			this.stage.addChild(text);
		}
		// start the tick and point it at the window so we can do some work before updating the stage:
    this.boundTick = bind(this,this.tick);
    createjs.Ticker.framerate = 15;
		createjs.Ticker.addEventListener("tick", this.boundTick);

    // Force our layout to update after painting the div has completed
    next(this, () => this.updateSize());
  },

  willDestroyElement(){
    createjs.Ticker.removeEventListener("tick", this.boundTick);
    this.boundTick = null;
  },

  tick(event) {
    const canvas = this.element;
		var w = canvas.width + this.factor * 2;
		var h = canvas.height + this.factor * 2;
		var l = this.stage.numChildren;
		// iterate through all the children and move them according to their velocity:
		for (var i = 1; i < l; i++) {
			const text = this.stage.getChildAt(i);
			text.x = (text.x + this.factor + text.velX + w) % w - this.factor;
			text.y = (text.y + this.factor + text.velY + h) % h - this.factor;
		}
		// draw the updates to stage:
		this.stage.update(event);
	}
});
