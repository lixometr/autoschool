
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    label: String,
    required: Boolean,
    value: [String, Number],
    showValid: Boolean,
    inputClass: {
      type: Object,
      default: () => ({}),
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    return {};
  },
  computed: {
    _listeners() {
      return Object.assign({}, this.$listeners, {
        input: this.onInput,
        change: this.onInput,
      });
    },
    _attrs() {
      return Object.assign({}, this.$attrs, {
        value: this.value,
      });
    },
  },
  methods: {
    onInput(e: any) {
      const newValue = e.target.value;
      this.$emit("input", newValue);
    },
  },
});
</script>

