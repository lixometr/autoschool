<template>
  <app-select
    class="autocomplete-select"
    :class="{ 'not-searched': !isSearched }"
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
    @search="onSearch"
  >
  </app-select>
</template>

<script lang="ts">
import AppSelect from "./AppSelect.vue";
import { computed, defineComponent, ref, toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  searchFunc: (...args: any[]) => any;
  makeOptions: (...args: any[]) => any;
  makeRequest: (...args: any[]) => any;
}
export default defineComponent({
  components: { AppSelect },
  props: {
    makeRequest: {
      type: Function,
      default: ({ search }) => ({ name: search }),
    },
    searchFunc: Function,
    makeOptions: {
      type: Function,
      default: (result) => result,
    },
  },
  setup(props: IProps) {
    const { searchFunc, makeOptions, makeRequest } = toRefs<IProps>(props);
    const isSearched = ref(false);
    const { exec: searchItems, result } = searchFunc.value();

    const options = computed(() => makeOptions.value(result.value) || []);
    const onSearch = async (search: string) => {
      if (!search) return;
      await searchItems(makeRequest.value({ search }));
      isSearched.value = true;
      return options.value;
    };
    return { options, onSearch, isSearched };
  },
});
</script>

<style lang="scss">
.autocomplete-select {
  &.not-searched {
    .vs__dropdown-menu {
      display: none;
    }
  }
}
</style>