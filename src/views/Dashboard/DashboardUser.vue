<template>
  <div class="SPersonalCabinet section pt-0">
    <div class="container">
      <div class="row my-0">
        <div class="cabinet-block col bg-white border-bottom border-light">
          <div class="cabinet-block__head row">
            <h1 class="col-lg">
              {{ $t("personalCabinet.title") }}
            </h1>
            <!-- <div class="col-auto small"><a href="#">Edit information</a></div>
						<div class="col-auto small"><a href="#">Documents</a></div> -->
          </div>
          <div class="row">
            <div class="col-sm-auto mb-2">
              <div class="avatar-block avatar-block--lg">
                <img src="@/assets/img/avatar.png" alt="" />
              </div>
            </div>
            <dashboard-user-info />
            <dashboard-alerts />
          </div>
        </div>
        <dashboard-info-card />
        <div class="cabinet-block col-12 bg-white">
          <div class="alert alert-warning small" role="alert">
            <Warning /> You have 27&nbsp;Day(s) to&nbsp;complete this course.
            If&nbsp;you do&nbsp;not complete the course by&nbsp;then you will
            not be&nbsp;able to&nbsp;graduate the course and will have
            to&nbsp;take the entire course again
          </div>
          <dashboard-course-progress />
        </div>
        <dashboard-cta />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCourseProgress from "@/components/DashboardUser/DashboardCourseProgress.vue";
import { defineComponent } from "@vue/composition-api";
import Warning from "@/components/icons/Warning.vue";
import DashboardAlerts from "@/components/DashboardUser/DashboardAlerts.vue";
import DashboardInfoCard from "@/components/DashboardUser/DashboardInfoCard.vue";
import DashboardCta from "@/components/DashboardUser/DashboardCta.vue";
import DashboardUserInfo from "@/components/DashboardUser/DashboardUserInfo.vue";

export default defineComponent({
  components: {
    Warning,
    DashboardCourseProgress,
    DashboardAlerts,
    DashboardInfoCard,
    DashboardCta,
    DashboardUserInfo,
  },
});
</script>

<style lang="scss">
</style>