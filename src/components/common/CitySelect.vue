<template>
  <auto-complete-select
    v-on="$listeners"
    v-bind="$attrs"
    :searchFunc="searchFunc"
    :makeOptions="makeOptions"
    :makeRequest="makeRequest"
    selectLabel="name"
    :reduce="(item) => item.value"
  />
</template>

<script lang="ts">
import { defineComponent, toRef, toRefs } from "@vue/composition-api";
import { useApiGetCities, useApiGetCountries } from "@/api/geo";
import { errorHandler } from "@/helpers/error-handler";
import AutoCompleteSelect from "./AutoCompleteSelect.vue";
export default defineComponent({
  components: { AutoCompleteSelect },
  props: {
    stateId: Number,
  },
  setup(props) {
    const { stateId } = toRefs(props);
    const searchFunc = () => {
      return useApiGetCities({
        toast: { error: errorHandler() },
      });
    };
    const makeOptions = (result: any[]) => {
      return (
        result && result.map((item) => ({ name: item.name, value: item.id }))
      );
    };
    const makeRequest = ({ search }: { search: string }) => {
      return {
        stateId: stateId.value,
        search,
      };
    };

    return {
      makeRequest,
      makeOptions,
      searchFunc,
    };
  },
});
</script>

<style lang="scss">
</style>