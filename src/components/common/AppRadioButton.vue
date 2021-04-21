<template>
  <label class="form-check">
    <input class="form-check-input" type="radio" v-model="inputModel" />
    <span class="form-check-label">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    label: String,
    value: Boolean,
  },
  computed: {
    inputModel: {
      get() {
        return this.value;
      },
      set(val) {
        console.log(val);
        this.$emit("input", val);
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style >
</style>