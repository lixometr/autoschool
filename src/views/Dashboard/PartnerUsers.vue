<template>
  <div class="container pt-0">
    <app-table-wrapper
      :backText="'Back to dashboard'"
      :backLink="{ name: 'Dashboard' }"
      :title="'Partner Users'"
      :addText="'User'"
      @search="onSearch"
    >
      <app-table :fields="fields" :value="items"/>
    </app-table-wrapper>
  </div>
</template>

<script lang="ts">
import AppTable from '../../components/AppTable/AppTable.vue'
import AppTableWrapper from "../../components/AppTable/AppTableWrapper.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { AppTableWrapper, AppTable },
  setup() {
    return {
      fields: [
        {
          key: 'td1',
          label: "Name/email"
        },
        {
          key: 'td2',
          label: "DOB"
        },
        {
          key: 'td3',
          label: "ID/Num. doc"
        },
        {
          key: 'td4',
          label: "Class"
        },
        {
          key: 'td5',
          label: "Class"
        },
        {
          key: 'td6',
          label: "Where?"
        },
      ],
   
      items: [
        {
          td1: "John Smith",
          td1Link: "sample@sample.com",
          td2: "10.10.1996",
          td3: "ID 755 444 556",
          td3a: "# 458 998 556 ",
          td4: "D",
          td5: "15.10.16   15:20",
          td6: "Unit 3",
          td7: "1558",
          td8: "Maria A.",
          td9: "$4",
          td10: "CZ-BASE",
          td11: "70 min.",
          td12: "3",
          td13: "15.10.16   15:20",
        },
        {
          danger: true,
          td1: "John Smith",
          td1Link: "sample@sample.com",
          td2: "10.10.1996",
          td3: "ID 755 444 556",
          td3a: "# 458 998 556 ",
          td4: "D",
          td5: "15.10.16   15:20",
          td6: "Unit 3",
          td7: "1558",
          td8: "Maria A.",
          td9: "$4",
          td10: "CZ-BASE",
          td11: "70 min.",
          td12: "3",
          td13: "15.10.16   15:20",
        },
        {
          td1: "John Smith",
          td1Link: "sample@sample.com",
          td2: "10.10.1996",
          td3: "ID 755 444 556",
          td3a: "# 458 998 556 ",
          td4: "D",
          td5: "15.10.16   15:20",
          td6: "Unit 3",
          td7: "1558",
          td8: "Maria A.",
          td9: "$4",
          td10: "CZ-BASE",
          td11: "70 min.",
          td12: "3",
          td13: "15.10.16   15:20",
        },
      ],
    };
  },
});
</script>

<style >
</style>