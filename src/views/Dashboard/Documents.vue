<template>
  <div class="container pt-0">
    <app-table-wrapper
      :backText="'Back to partner'"
      :backLink="{ name: 'Dashboard' }"
      :title="'Documents'"
      :addText="'Document'"
      :showSearch="false"
      @add="onAdd"
      @search="onSearch"
    >
      <div class="cabinet-block__body p-3">
        <div class="doc-item" v-for="item in items" :key="item.id">
          <div class="doc-item__icon-wrap">
            {{ item.type }}
          </div>
          <div>
            <div class="h6 strong mb-0">{{ item.title }}</div>
            <div>
              <a :href="item.link"> {{ item.size }}</a>
            </div>
          </div>
        </div>
      </div>
    </app-table-wrapper>
  </div>
</template>

<script lang="ts">
import AppTableWrapper from "../../components/AppTable/AppTableWrapper.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { AppTableWrapper },
  setup() {
    const onAdd = () => {
        return
    };
    const items = [
      {
        type: "pdf",
        title: "All participant questionnaires",
        size: "Download pdf (1.5 mb)",
        link: "#",
      },
      {
        type: "pdf",
        title: "Contract with the Public Chamber of New York",
        size: "Download pdf (1.5 mb)",
        link: "#",
      },
      {
        type: "pdf",
        title: "All participant questionnaires",
        size: "Download pdf (1.5 mb)",
        link: "#",
      },
      {
        type: "pdf",
        title: "Contract with the Public Chamber of New York",
        size: "Download pdf (1.5 mb)",
        link: "#",
      },
    ];
    return { items, onAdd };
  },
});
</script>

<style scoped>
</style>