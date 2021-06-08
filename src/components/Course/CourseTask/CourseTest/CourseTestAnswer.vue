<template>
  <button
    class="btn btn-answer"
    :class="{
      'btn-answer--invalid': isValid === false,
      'btn-answer--valid': isValid === true,
    }"
  >
    {{ title }}
    <span v-if="isValid === false">Incorrect</span>
    <span v-if="isValid === true">Correct</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    isValid: Boolean,
    title: String,
  },
});
</script>

<style lang="scss" >
</style>