<template>
  <div class="col-lg-auto">
    <button class="btn-alert btn-danger-light" v-if="shipping" @click="goTo('ShippingAddress')">
      <Warning />
      <span>Shipping Address</span>
    </button>
    <br />
    <button class="btn-alert btn-danger-light" v-if="sequrityQuestions" @click="goTo('SecurityQuestions')">
      <Warning />
      <span>Setup Security Questions</span>
    </button>
    <br />
    <button class="btn-alert btn-danger-light" v-if="personalData" @click="goTo('PersonalData')">
      <Warning />
      <span>Your Personal Data</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import Warning from "@/components/icons/Warning.vue";
import { UserModule } from "@/store/modules/user";
import useRouter from "@/compositions/useRouter";

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
    const goTo = (name: string) => {
      const router = useRouter()
      router.push({name})
    }
    return { shipping, sequrityQuestions, personalData, goTo };
  },
});
</script>

<style >
</style>