<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
defineProps({
  themeName: { type: String, required: true },
});
</script>

<style>
.docs-story {
  .v-application__wrap {
    min-height: fit-content;
  }
}
</style>
