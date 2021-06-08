<template>
  <div class="course-taks-checkbox">
    <div class="row">
      <div class="col">
        <div class="h6 strong pb-3">
          {{ item.title }}
        </div>
        <label class="form-check" v-for="(checkbox, idx) in options" :key="idx">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            :checked="value[idx]"
            @change="onChange($event.target.checked, idx)"
          />
          <span class="form-check-label">{{ checkbox.value }} </span>
        </label>
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

    const options = computed(() => item.value.options || []);
    const onChange = (newValue: boolean, idx: number) => {
      const newValues = { ...value.value };
      newValues[idx] = newValue;
      emit("input", newValues);
    };
    return { validate, options, onChange };
  },
});
</script>

<style >
</style>