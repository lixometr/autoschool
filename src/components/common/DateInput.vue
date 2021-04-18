<template>
  <app-input v-on="$listeners" v-bind="$attrs" type="date" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AppInput from "./AppInput.vue";

export default defineComponent({
  inheritAttrs: false,
  components: { AppInput },
  setup() {
    return {};
  },
});
</script>

<style >
</style>