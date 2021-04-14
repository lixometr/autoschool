<template>
  <div class="col-auto cabinet-btn">
    <div class="cabinet-btn__avatar">{{ avatarPlaceholder }}</div>
    <div class="cabinet-btn__name d-none d-sm-block">{{ fullName }}</div>
  </div>
</template>

<script >
import { UserModule } from "@/store/modules/user";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const fullName = computed(() => {
      if (!UserModule.isAuth) return;
      return `${UserModule.user?.first_name} ${UserModule.user?.last_name[0]}.`;
    });
    const avatarPlaceholder = computed(() => {
      if (!UserModule.isAuth) return;
      return UserModule.user?.first_name[0] + UserModule.user?.last_name[0];
    });
    return { fullName, avatarPlaceholder };
  },
});
</script>

<style lang="scss" >
</style>