<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  async created() {
    const app = new PIXI.Application();
    document.body.appendChild(app.view);

    const graphics = new PIXI.Graphics();
    // const width = 60;
    const width = -60;
    const height = 40;
    graphics.clear();
    graphics.beginFill(0xff0000);
    graphics.drawRect(100, 100, width, height);
    graphics.endFill();

    app.stage.addChild(graphics);

    console.log('width', graphics.width, 'height', graphics.height);
    // eslint-disable-next-line no-underscore-dangle
    console.log('bounds', graphics._bounds, graphics.getBounds());
    window.graphics = graphics;
  },
};
</script>
