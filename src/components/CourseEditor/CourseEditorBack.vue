<template>
  <router-link
    :to="{ name: 'Dashboard' }"
    class="col-3 ps-4 d-flex align-items-center btn-back btn btn-primary border-end"
  >
    <ChevronLeft />
    <span class="ms-3 d-none d-md-inline fw-600">{{
      $t("backToDashboard")
    }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ChevronLeft from "@/components/icons/ChevronLeft.vue";

export default defineComponent({
  components: { ChevronLeft },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>