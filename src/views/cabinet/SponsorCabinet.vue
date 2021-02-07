<template>
  <div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TopNav :cabinet="true"/>
    <SSponsorCabinet/> 
 

    <Footer/>

  </div>
</template>

<style  ></style>

<script>
 
import TopNav from '@/components/TopNav.vue'
// import SRegisterPage from '@/components/SRegisterPage.vue'
// import HeaderBlock from '@/components/HeaderBlock.vue'
// import SRegister from '@/components/SRegister.vue'
// import SAbout from '@/components/SAbout.vue'
// import SWhatWillLearn from '@/components/SWhatWillLearn.vue'
// import SPromocode from '@/components/SPromocode.vue'
import SSponsorCabinet from '@/components/SSponsorCabinet.vue'
// import FormAside from '@/components/FormAside.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Faq',
  components: { 
    TopNav,
    // SRegisterPage,
    // HeaderBlock,
    // SRegister,
    // SAbout,
    // SWhatWillLearn,
    // SPromocode,
    SSponsorCabinet,
    // FormAside,
    Footer,
  }
}
</script>
