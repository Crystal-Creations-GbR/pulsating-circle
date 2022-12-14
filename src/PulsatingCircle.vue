<!--
Copyright (c) 2022 by Crystal Creations GbR and jojomatik
Copyright (c) 2020 by eereeska (https://codepen.io/eereeska/pen/gOPdBZg)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 -->
<template>
  <div class="pulsating-circle" :style="pulsatingCircleStyle">
    <div class="pulse" :class="color"></div>
    <div class="circle" :class="color"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * A pulsating circle icon.
 */
@Component
export default class PulsatingCircleIcon extends Vue {
  /**
   * The color of the circle and the pulse.
   *
   * Use color class in combination with "lighten-x" to access modified colors.
   *
   * If not set, it will be white.
   */
  @Prop({ default: "white" }) color!: string;

  /**
   * The size of the inner circle in pixels.
   *
   * The pulse (and the whole component) is 200% as big.
   */
  @Prop({ default: 16 }) size!: number;

  /**
   * Returns the style used for the outer div.
   */
  get pulsatingCircleStyle(): string {
    const outerSize = this.size * 2 + "px;";
    return (
      "height: " +
      outerSize +
      "width: " +
      outerSize +
      "min-height: " +
      outerSize +
      "min-width: " +
      outerSize
    );
  }
}
</script>

<style lang="scss" scoped>
.pulsating-circle {
  @keyframes pulse {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
  @keyframes circle {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: pulse 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  .circle {
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    animation: circle 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }
}
</style>
