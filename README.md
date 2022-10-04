# @crystal-creations/pulsating-circle

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
