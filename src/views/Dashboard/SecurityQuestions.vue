<template>
  <div class="container section pt-0">
    <div class="row">
      <div class="cabinet-block bg-white col-12">
        <div class="row">
          <div class="col">
            <div class="cabinet-block__head row">
              <h1 class="col-lg">Setup Security Questions</h1>
              <!-- <div class="col-auto small"><a href="#">Edit information</a></div>
									<div class="col-auto small"><a href="#">Documents</a></div> -->
            </div>
            <security-questions-form />
          </div>
          <div class="col-xl-4 pt-2">
            <div v-html="$t('securityQuestions.requirements')"></div>
            <div class="pt-2">
              <a href="#" class="tdu strong">{{
                $t("securityQuestions.requirementsBtn")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecurityQuestionsForm from "@/components/SecurityQuestions/SecurityQuestionsForm.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { SecurityQuestionsForm },
});
</script>

<style lang="scss" >
</style>