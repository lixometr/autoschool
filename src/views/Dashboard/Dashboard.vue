<template>
  <components :is="dashboardComponent" />
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { computed, defineComponent } from "@vue/composition-api";
import DashboardUser from "./DashboardUser.vue";
export default defineComponent({
  setup() {
    //   UserModule.user.roles
    const dashboardComponent = computed(() => {
      return DashboardUser;
    });
    return { dashboardComponent };
  },
});
</script>

<style scoped>
</style>