<template>
  <div class="SPartnerCabinet section pt-0">
    <div class="container">
      <div class="row my-0">
        <div class="cabinet-block col bg-white">
          <div class="SPartnerCabinet__head row">
            <h1 class="col-lg">{{ $t("partnerCabinet.title") }}</h1>
            <div class="col-auto small">
              <router-link :to="{ name: 'PartnerEditInfo' }">{{
                $t("partnerCabinet.editInfo")
              }}</router-link>
            </div>
            <div class="col-auto small">
              <router-link :to="{ name: 'PartnerDocuments' }">{{
                $t("partnerCabinet.documents")
              }}</router-link>
            </div>
          </div>
          <dashboard-partner-user-card />
        </div>
        <!-- / cabinet-block -->
        <dashboard-partner-info-card />
        <div class="cabinet-block cabinet-block--light col-12">
          <div class="h6 strong">{{ $t("partnerCabinet.dashboard") }}</div>
          <p class="mb-4" v-html="$t('partnerCabinet.infoText')"></p>
          <div class="row">
            <div class="col-auto">
              <router-link
                :to="{ name: 'PartnerPromocodes' }"
                class="btn btn-md btn-outline-primary"
              >
                {{ $t("partnerCabinet.promocode") }}
              </router-link>
            </div>
            <div class="col-auto">
              <router-link
                :to="{ name: 'PartnerUsers' }"
                class="btn btn-md btn-outline-primary"
              >
                {{ $t("partnerCabinet.students") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DashboardPartnerUserCard from "../../components/DashboardPartner/DashboardPartnerUserCard.vue";
import DashboardPartnerInfoCard from "@/components/DashboardPartner/DashboardPartnerInfoCard.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { DashboardPartnerInfoCard, DashboardPartnerUserCard },
  setup() {
    return {};
  },
});
</script>

<style >
</style>