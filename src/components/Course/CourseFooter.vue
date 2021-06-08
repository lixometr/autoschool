<template>
  <div class="row pt-5 align-items-center">
    <div class="col mb-3 order-first">
      <course-footer-progress />
    </div>
    <div class="col-auto">
      <button class="btn btn-md btn-primary" @click.prevent="$emit('next')">{{ $t("nextPage") }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import CourseFooterProgress from "./CourseFooterProgress.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { CourseFooterProgress },
  setup() {
    return {};
  },
});
</script>

<style >
</style>