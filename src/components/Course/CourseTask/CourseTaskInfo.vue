<template>
  <div class="course-taks-info">
    <div v-html="item.value"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    value: null
  },
  setup() {
    const validate = () => true;
    return { validate };
  },
});
</script>

<style >
</style>