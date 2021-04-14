<template>
  <div
   
  >
    <div class="container section pt-0">
      <div class="row">
        <div class="cabinet-block bg-white col-12">
          <div class="row">
            <div class="col">
              <div class="cabinet-block__head row">
                <h1 class="col-lg">{{ $t("signup.title") }}</h1>
                <!-- <div class="col-auto small"><a href="#">Edit information</a></div>
									<div class="col-auto small"><a href="#">Documents</a></div> -->
              </div>
              <sign-up-form />
            </div>
            <div class="col-xl-4 pt-2">
              <div v-html="$t('signup.requirements')"></div>
              <div class="pt-2">
                <a href="#" class="tdu strong">{{
                  $t("signup.requirementsBtn")
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  ></style>

<script>
import SignUpForm from "../../components/SignUp/SignUpForm.vue";



export default {
  name: "Faq",
  components: {
  
    SignUpForm,
  },
  data() {
    return {
      isPassword: true,
    };
  },

  methods: {
    toggleType: function () {
      this.isPassword = !this.isPassword;
      // some code to filter users
    },
  },
};
</script>
