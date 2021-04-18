<template>
  <div class="SPartnerCabinet__body row align-items-center">
    <div class="col-sm-auto">
      <div class="SPartnerCabinet__logo">
        <img src="@/assets/img/partner-logo.svg" alt="" />
      </div>
    </div>
    <div class="col">
      <div class="strong mb-2">Company name</div>
      <div class="mb-4">Position</div>
      <div class="strong mb-2">+1 568 998 55 88</div>
      <div class="strong mb-4">
        <a href="mailto:sample@sample.com">sample@sample.com</a>
      </div>
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

<style >
</style>