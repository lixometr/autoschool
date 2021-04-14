<template>
  <div>
    <div class="container landing-body">
      <div class="row">
        <div class="col-xl-8">
          <div class="page-head">
            <h1>FAQ</h1>
          </div>
          <SAccordion />
        </div>
        <div class="col-xl-4">
          <FormAside />
        </div>
      </div>
    </div>
  </div>
</template>

<style  ></style>

<script>
import SAccordion from "@/components/SAccordion.vue";
import FormAside from "@/components/FormAside.vue";

export default {
  name: "Faq",
  components: {
    SAccordion,
    FormAside,
  },
};
</script>
