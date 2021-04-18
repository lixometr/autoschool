<template>
  <components :is="dashboardComponent" />
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { computed, defineComponent } from "@vue/composition-api";
import DashboardUser from "./DashboardUser.vue";
import DashboardPartner from "./DashboardPartner.vue";
export default defineComponent({
  setup() {
    //   UserModule.user.roles
    const dashboardComponent = computed(() => {
      return DashboardPartner;
    });
    return { dashboardComponent };
  },
});
</script>

<style >
</style>