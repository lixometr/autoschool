<template>
  <div class="col-lg-auto">
    <button class="btn-alert btn-danger-light" v-if="shipping">
      <Warning />
      <span>Shipping Address</span>
    </button>
    <br />
    <button class="btn-alert btn-danger-light" v-if="sequrityQuestions">
      <Warning />
      <span>Setup Security Questions</span>
    </button>
    <br />
    <button class="btn-alert btn-danger" v-if="personalData">
      <Warning />
      <span>Your Personal Data</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import Warning from "@/components/icons/Warning.vue";
import { UserModule } from "@/store/modules/user";

export default defineComponent({
  components: { Warning },
  setup() {
    const shipping = computed(
      () => !UserModule.user.verification_status.shipping_address_filled
    );
    const sequrityQuestions = computed(
      () => !UserModule.user.verification_status.questions_answered
    );
    const personalData = computed(
      () => !UserModule.user.verification_status.personal_data_filled
    );
    return { shipping, sequrityQuestions, personalData };
  },
});
</script>

<style >
</style>