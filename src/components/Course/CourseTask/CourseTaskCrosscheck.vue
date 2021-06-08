<template>
  <div class="course-taks-crosscheck">
    {{ item }}
    <!-- <div
            class="left-btn-line"
            style="transform: rotate(28deg); width: 86px"
          ></div> -->
    <div class="row row-lines">
      <div class="col-auto">
        <div
          class="left-btn "
          v-for="(el, i) in firstPart"
          :key="i"
          :class="{
            'border-danger': isCorrect(el) === false,
            'border-success': isCorrect(el),
          }"
        >
          {{ el.value }}
        </div>
      </div>
      <div class="col">
        <div
          class="right-text-block "
          v-for="(el, i) in secondPart"
          :key="i"
          :class="{
            'border-danger': isCorrect(el) === false,
            'border-success': isCorrect(el),
          }"
        >
          {{ el.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { item, value } = toRefs(props);
    const validate = () => true;
    const firstPart = computed(() => {
      return item.value.first_part || [];
    });
    const secondPart = computed(() => {
      return item.value.second_part || [];
    });
    const isCorrect = () => {
      return undefined;
    };
    return { validate, firstPart, secondPart, isCorrect };
  },
});
</script>

<style >
</style>