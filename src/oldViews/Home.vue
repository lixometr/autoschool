<template>
  <div class="main-wrapper main-wrapper--home main-wrapper--landing">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TopNav />
    <HeaderBlock />
    <SRegister />
    <SAbout />
    <SWhatWillLearn />
    <SPromocode />
    <SModules />
    <SReady />
    <Footer />
  </div>
</template>

<style  ></style>

<script>
import TopNav from "@/components/TopNav.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
import SRegister from "@/components/SRegister.vue";
import SAbout from "@/components/SAbout.vue";
import SWhatWillLearn from "@/components/SWhatWillLearn.vue";
import SPromocode from "@/components/SPromocode.vue";
import SModules from "@/components/SModules.vue";
import SReady from "@/components/SReady.vue";
import Footer from "@/components/Footer.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
 
  components: {
    TopNav,
    HeaderBlock,
    SRegister,
    SAbout,
    SWhatWillLearn,
    SPromocode,
    SModules,
    SReady,
    Footer,
  },
});
</script>
