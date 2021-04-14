<template>
  <label class="input-wrap app-select">
    <span class="input-wrap__title"
      >{{ label }} <span class="text-danger" v-if="required">*</span></span
    >
    <v-select
      class="form-select"
      v-on="_listeners"
      v-bind="_attrs"
      :class="{
        'is-invalid': !!errors.length,
        'is-valid': !errors.length && showValid,
        ...inputClass,
      }"
      :options="options"
    >
    </v-select>
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
  inheritAttrs: false,
  mixins: [InputMixin],
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => [],
    },
    selectLabel: {
      type: String,
    },
  },
  computed: {
    _attrs() {
      return Object.assign({}, this.$attrs, {
        value: this.value,
        label: this.selectLabel,
        clearable: this.clearable
      });
    },
  },
  methods: {
    onInput(newValue) {
      this.$emit("input", newValue);
    },
  },
});
</script>

<style lang="scss">
.app-select {
  .vs__dropdown-toggle {
    border: none;
  }
  .form-select {
    background: none;
  }
}
</style>