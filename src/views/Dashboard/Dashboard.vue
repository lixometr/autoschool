<template>
  <components :is="dashboardComponent" />
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { computed, defineComponent } from "@vue/composition-api";
import DashboardUser from "./DashboardUser.vue";
import DashboardPartner from "./DashboardPartner.vue";
import { UserRoles } from "@/types/constants";
import DashboardAdmin from "./DashboardAdmin.vue";
export default defineComponent({
  setup() {
    const dashboardComponent = computed(() => {
      if (UserModule.user.role.name === UserRoles.superAdmin) {
        return DashboardAdmin;
      } else if (UserModule.user.role.name === UserRoles.listener) {
        return DashboardUser;
      } else {
        return DashboardPartner;
      }
    });
    return { dashboardComponent };
  },
});
</script>

<style >
</style>