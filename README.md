# @crystal-creations/pulsating-circle
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Crystal-Creations-GbR/pulsating-circle?sort=semver)](https://github.com/Crystal-Creations-GbR/pulsating-circle/releases) [![GitHub](https://img.shields.io/github/license/Crystal-Creations-GbR/pulsating-circle)](LICENSE) [![Build and publish npm package](https://github.com/Crystal-Creations-GbR/pulsating-circle/actions/workflows/publish.yml/badge.svg)](https://github.com/Crystal-Creations-GbR/pulsating-circle/actions/workflows/publish.yml) [![npm](https://img.shields.io/npm/v/@crystal-creations/pulsating-circle)](https://www.npmjs.com/package/@crystal-creations/pulsating-circle) [![npm](https://img.shields.io/npm/dw/@crystal-creations/pulsating-circle)](https://www.npmjs.com/package/@crystal-creations/pulsating-circle)

A pulsating circle wrapped in a Vue component based on a [codepen](https://codepen.io/eereeska/pen/gOPdBZg) by eereeska.

## Usage
1. Install with

   `npm install @crystal-creations/pulsating-circle`

2. Add the following to your Vue `main.ts`.
    ```ts
    import { PulsatingCircle } from "@crystal-creations/pulsating-circle";
    
    // ...
    
    new Vue({
      // ...
      render: (h) => h(App),
    }).$mount("#app");
    
    Vue.component("PulsatingCircle", PulsatingCircle);
    ```

3. Add the component to your Vue component.
    ```vue
    <template>
      <PulsatingCircle></PulsatingCircle>
    </template>
    ```
