<template>
  <label class="input-wrap app-select">
    <span class="input-wrap__title"
      >{{ label }} <span class="text-danger" v-if="required">*</span></span
    >
    <v-select
      class="form-select form-control"
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
      default: false,
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
        clearable: this.clearable,
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
    padding-right: 10px;
    background-size: 0 0;
    &.is-invalid {
      background-position: right 0.75rem center, center right 1rem;
      background-size: 0 0, calc(0.75em + 0.938rem) calc(0.75em + 0.938rem);
      padding-right: calc(0.75em + 2rem);
    }
  }
}
</style>