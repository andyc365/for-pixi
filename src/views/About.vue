<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';
import ViewUtils from './builder-pixi/utils/ViewUtils';

export default {
  async created() {
    const graphics = new PIXI.Graphics();
    const width = -2;
    const height = 4;
    graphics.clear();
    graphics.beginFill(0x0);
    graphics.drawRect(0, 0, width, height);
    graphics.endFill();
    window.graphics = graphics;
    // eslint-disable-next-line no-underscore-dangle
    console.log('graphics', graphics.width, graphics.height, graphics._bounds);
  },
};
</script>
