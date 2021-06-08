<template>
  <div class="course-taks-question">
    <div class="block-gradient">
      <div class="block-gradient__title">
        {{ item.title }}
      </div>
      <div class="block-gradient__btns">
        <button class="btn btn-white text-uppercase" @click="choose(false)">
          {{ $t("no") }}
        </button>
        <button class="btn btn-white text-uppercase" @click="choose(true)">
          {{ $t("yes") }}
        </button>
      </div>
    </div>
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
    value: null,
  },
  setup(props, { emit }) {
    const validate = () => true;
    const choose = (variant: boolean) => {
      emit("input", variant);
    };
    return { validate, choose };
  },
});
</script>

<style >
</style>