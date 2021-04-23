<template>
  <div class="container pt-0">
    <app-table-wrapper
      :backText="$t('backToDashboard')"
      :backLink="{ name: 'Dashboard' }"
      :title="$t('partnerUsers.title')"
      :addText="'User'"
      @search="search"
      @add="onAdd"
    >
      <app-table :fields="fields" :value="items" />
    </app-table-wrapper>
  </div>
</template>

<script lang="ts">
import AppTable from "../../components/AppTable/AppTable.vue";
import AppTableWrapper from "../../components/AppTable/AppTableWrapper.vue";
import { defineComponent } from "@vue/composition-api";
import useSearchTable from "@/compositions/useSearchTable";
import { useApiGetPartnerUsers } from "@/api/partner-users";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
export default defineComponent({
  components: { AppTableWrapper, AppTable },
  setup() {
    const { search, init, items, refreshItems } = useSearchTable({
      api: useApiGetPartnerUsers,
    });
    init({});
    const onAdd = () => {
      const { showByName } = useModal();
      showByName(ModalName.addUser, {
        on: {
          send: () => refreshItems(),
        },
      });
    };

    return {
      onAdd,
      search,
      fields: [
        {
          key: "td1",
          label: "Name/email",
        },
        {
          key: "td2",
          label: "DOB",
        },
        {
          key: "td3",
          label: "ID/Num. doc",
        },
        {
          key: "td4",
          label: "Class",
        },
        {
          key: "td5",
          label: "Class",
        },
        {
          key: "td6",
          label: "Where?",
        },
      ],
      items,
      // items: [
      //   {
      //     td1: "John Smith",
      //     td1Link: "sample@sample.com",
      //     td2: "10.10.1996",
      //     td3: "ID 755 444 556",
      //     td3a: "# 458 998 556 ",
      //     td4: "D",
      //     td5: "15.10.16   15:20",
      //     td6: "Unit 3",
      //     td7: "1558",
      //     td8: "Maria A.",
      //     td9: "$4",
      //     td10: "CZ-BASE",
      //     td11: "70 min.",
      //     td12: "3",
      //     td13: "15.10.16   15:20",
      //   },
      //   {
      //     danger: true,
      //     td1: "John Smith",
      //     td1Link: "sample@sample.com",
      //     td2: "10.10.1996",
      //     td3: "ID 755 444 556",
      //     td3a: "# 458 998 556 ",
      //     td4: "D",
      //     td5: "15.10.16   15:20",
      //     td6: "Unit 3",
      //     td7: "1558",
      //     td8: "Maria A.",
      //     td9: "$4",
      //     td10: "CZ-BASE",
      //     td11: "70 min.",
      //     td12: "3",
      //     td13: "15.10.16   15:20",
      //   },
      //   {
      //     td1: "John Smith",
      //     td1Link: "sample@sample.com",
      //     td2: "10.10.1996",
      //     td3: "ID 755 444 556",
      //     td3a: "# 458 998 556 ",
      //     td4: "D",
      //     td5: "15.10.16   15:20",
      //     td6: "Unit 3",
      //     td7: "1558",
      //     td8: "Maria A.",
      //     td9: "$4",
      //     td10: "CZ-BASE",
      //     td11: "70 min.",
      //     td12: "3",
      //     td13: "15.10.16   15:20",
      //   },
      // ],
    };
  },
});
</script>

<style >
</style>