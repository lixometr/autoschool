<template>
  <label class="input-wrap">
    <span class="input-wrap__title"
      >{{ label }} <span class="text-danger" v-if="required">*</span></span
    >
    <input
      class="form-control"
      v-on="_listeners"
      v-bind="_attrs"
      :class="{
        'is-invalid': !!errors.length,
        'is-valid': !errors.length && showValid,
        ...inputClass,
      }"
      ref="el"
    />
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
});
</script>

<style lang="scss">
</style>