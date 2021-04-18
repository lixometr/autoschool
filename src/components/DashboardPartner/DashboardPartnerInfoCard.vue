<template>
  <div class="cabinet-block col-md-auto bg-primary text-white">
    <div class="SPartnerCabinet__head row">
      <div class="col">
        <div class="small mb-1">{{ $t("partnerCabinet.tickets") }}</div>
        <div class="h6 strong">{{ fullName }}</div>
      </div>
      <div class="col-auto">
        <div class="avatar-block avatar-block--md">
          <img src="@/assets/img/avatar.png" alt="" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 pb-4">
        <div class="small mb-1">{{ $t("partnerCabinet.earn") }}:</div>
        <div class="h6 strong">$4 580</div>
      </div>
      <div class="col-6 pb-4">
        <div class="small mb-1">{{ $t("partnerCabinet.students") }}:</div>
        <div class="h6 strong">256</div>
      </div>
      <div class="col-12">
        <div class="small mb-1">{{ $t("partnerCabinet.period") }}:</div>
        <div class="h6 strong">01.01.2020 - 01.17.2020</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const fullName = computed(
      () => `${UserModule.user?.first_name} ${UserModule.user?.last_name[0]}.`
    );
    return { fullName };
  },
});
</script>

<style >
</style>