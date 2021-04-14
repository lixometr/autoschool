<template>
  <div
    class="layout-default main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border"
  >
    <top-nav :cabinet="true" />
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