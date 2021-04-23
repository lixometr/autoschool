<template>
  <div>
    <app-radio-button
      v-for="(item, idx) in items"
      :key="idx"
      :label="item.name"
      :value="value === item.value"
      :name="'radio' + _uid"
      @input="onItemChange(item.value)"
    />
  </div>
</template>

<script lang="ts">
import AppRadioButton from "./AppRadioButton.vue";
import { defineComponent } from "@vue/composition-api";
interface IItem {
  name: string;
  value: string | number;
}
export default defineComponent({
  components: { AppRadioButton },
  props: {
    value: [String, Number],
    items: {
      type: Array,
      default: () => [] as IItem[],
    },
  },
  setup(props, { emit }) {
    const onItemChange = (newVal: string | number) => {
      emit("input", newVal);
    };
    return { onItemChange };
  },
});
</script>

<style >
</style>