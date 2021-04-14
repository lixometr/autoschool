<template>
  <div class="main-wrapper main-wrapper--home main-wrapper--landing">
    <top-nav />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "../components/Footer.vue";
import TopNav from "../components/TopNav.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({ components: {  TopNav, Footer } });
</script>

<style lang="scss" >
</style>