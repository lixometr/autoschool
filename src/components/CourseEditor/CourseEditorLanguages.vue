<template>
  <div class="col d-flex border-bottom border-light">
    <a
      href="#"
      class="add-lang"
      v-for="(language, idx) in languages"
      :key="idx"
      :class="{ active: value === language }"
      >{{ language }}</a
    >
    <a href="#" class="add-lang add-lang--link" @click.prevent="addLanguage"
      >+ {{ $t("editor.addLanguage") }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: String,
  },
  setup() {
    const addLanguage = () => {
      return;
    };
    const languages = ["English"];
    return { addLanguage, languages };
  },
});
</script>

<style scoped>
</style>