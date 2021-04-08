<template>
  <label class="input-wrap">
    <span class="input-wrap__title"
      >{{ label }} <span class="text-danger" v-if="required">*</span></span
    >
    <select
      class="form-select "
      v-on="_listeners"
      v-bind="_attrs"
      :class="{
        'is-invalid': !!errors.length,
        'is-valid': !errors.length && showValid,
        ...inputClass,
      }"
    >
      <option :value="option.value" v-for="(option, idx) in options" :key="idx">
        {{ option.name }}
      </option>
    </select>
    <div class="invalid-feedback" v-for="(error, idx) in errors" :key="idx">
      {{ error }}
    </div>
    <slot name="footer" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import InputMixin from "@/components/InputMixin.vue";
export default defineComponent({
  mixins: [InputMixin],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    
  },
});
</script>

<style lang="scss">
</style>