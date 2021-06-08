<template>
  <div class="row pb-3">
    <div class="col h3 strong">{{ $t("units") }}</div>
    <div class="col-auto">
      <button class="btn btn-md btn-outline-primary">
        {{ $t("support") }}?
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>