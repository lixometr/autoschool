<template>
  <div class="container pt-0">
    <app-table-wrapper
      :backText="$t('backToDashboard')"
      :backLink="{ name: 'Dashboard' }"
      :title="$t('partnerPromocodes.title')"
      :addText="'Promocode'"
      @search="search"
      @add="onAdd"
    >
      <app-table :fields="fields" :value="items" />
    </app-table-wrapper>
  </div>
</template>

<script lang="ts">
import AppTableWrapper from "../../components/AppTable/AppTableWrapper.vue";
import { defineComponent } from "@vue/composition-api";
import { ModalName } from "@/types/modal.enum";
import useModal from "@/compositions/useModal";
import useSearchTable from "@/compositions/useSearchTable";
import {useApiGetPartnerPromocodes} from "@/api/partner-promocodes"
export default defineComponent({
  components: { AppTableWrapper },
  setup() {
      const { search, init, items, refreshItems } = useSearchTable({
      api: useApiGetPartnerPromocodes,
    });
    init({});
    const onAdd = () => {
      const { showByName } = useModal();
    //   showByName(ModalName.addUser, {
    //     on: {
    //       send: () => refreshItems(),
    //     },
    //   });
    };
    return {};
  },
});
</script>

<style scoped>
</style>