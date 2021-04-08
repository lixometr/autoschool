<template>
  <div class="main-wrapper main-wrapper--landing">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TopNav/>
    <div class="container landing-body">
      <div class="row">
        <div class="col-xl-8"> 
          <div class="page-head">
            <h1>FAQ</h1>
          </div> 
          <SAccordion/>
        </div>
        <div class="col-xl-4">
          <FormAside/> 

        </div>
      </div>
    </div>
 

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
import SAccordion from '@/components/SAccordion.vue'
import FormAside from '@/components/FormAside.vue'
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
    SAccordion,
    FormAside,
    Footer,
  }
}
</script>
