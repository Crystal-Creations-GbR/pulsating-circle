import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";

export default defineNuxtModule({
  async setup() {
    const resolver = createResolver(import.meta.url);

    await addComponent({
      name: "PulsatingCircle",
      filePath: resolver.resolve("components/PulsatingCircle.vue"),
    });
  },
});
