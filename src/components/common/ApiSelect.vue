<template>
  <div class="api-select" ref="container">
    <app-select
      :value="value"
      v-bind="$attrs"
      :options="options"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import AppSelect from "./AppSelect.vue";
import {
  defineComponent,
  onMounted,
  ref,
  toRefs,
  watch,
} from "@vue/composition-api";
import useLoading from "@/compositions/useLoading";
interface IProps {
  value: string;
  fetchFunc: (...args: any[]) => Promise<any[]>;
  [key: string]: any;
}
export default defineComponent({
  props: {
    value: String,
    fetchFunc: Function,
  },
  inheritAttrs: false,
  setup(props: IProps, { emit }) {
    const { value, fetchFunc } = toRefs<IProps>(props);
    const container = ref(null);
    const options = ref([]);
    onMounted(async () => {
      const loading = useLoading({
        container: container.value,
        width: 20,
        height: 40,
      });
      // loading.show();
      options.value = await fetchFunc.value();
      // loading.hide();
    });

    return {
      options,
      container,
    };
  },
  components: { AppSelect },
});
</script>

<style lang="scss">
.api-select {
  position: relative;
  .vld-overlay {
    height: 40px;
  }
}
</style>