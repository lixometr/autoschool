<template>
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <div class="cicle-progess">
        <svg class="progress-ring" :height="radius * 2" :width="radius * 2">
          <circle
            class=" "
            stroke="#C4C4C4"
            :stroke-width="stroke"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
          />
          <circle
            class="progress-ring__circle"
            stroke="var(--bs-primary)"
            fill="transparent"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset }"
            :stroke-width="stroke"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
          />
        </svg>
      </div>
    </div>
    <div class="col">
      There's time left
      <div class="h6 mb-0 strong">45 min</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    progress: Number,
  },

  setup() {
    return {};
  },
  data() {
    return {
      radius: 24,
      stroke: 6,
    };
  },
  computed: {
    normalizedRadius() {
      return +(this.radius - this.stroke);
    },
    circumference() {
      return this.normalizedRadius * 2 * Math.PI;
    },
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference;
    },
  },
});
</script>

<style >
</style>