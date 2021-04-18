<template>
  <table class="table table--managers smallest">
    <thead>
      <tr>
        <th v-for="(field, idx) in fields" :key="idx">{{ field.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, idx) in value" :key="idx">
        <slot
          :name="'field-' + idx"
          v-bind="{ value: val, field }"
          v-for="(field, index) in fields"
        >
          <td :key="index">
            {{ val[field.key] }}
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
interface Field {
  // key in values
  key: string;
  // col name
  label: string;
}
export default defineComponent({
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>