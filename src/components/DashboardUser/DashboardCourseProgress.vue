<template>
  <div>
    <div class="cabinet-block__head">
      <div class="h6">
        Сurrent course:
        <strong class="text-primary">ONLINE PRE-LICENSING COURSE</strong>
      </div>
    </div>
    <div class="cabinet-block__body">
      <div class="cource-steps">
        <div class="cource-steps__item active">Unit 1</div>
        <div class="cource-steps__item current">Unit 2</div>
        <div class="cource-steps__item">Unit 3</div>
        <div class="cource-steps__item">Unit 4</div>
        <div class="cource-steps__item">Unit 5</div>
        <div class="cource-steps__item">Unit 6</div>
      </div>
      <p>Until the end of the course another - <strong>3 month</strong></p>
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