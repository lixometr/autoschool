<template>
  <div>
    <HeaderBlock />
    <SRegister />
    <SAbout />
    <SWhatWillLearn />
    <SPromocode />
    <SModules />
    <SReady />
  </div>
</template>

<style  ></style>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";
import SRegister from "@/components/SRegister.vue";
import SAbout from "@/components/SAbout.vue";
import SWhatWillLearn from "@/components/SWhatWillLearn.vue";
import SPromocode from "@/components/SPromocode.vue";
import SModules from "@/components/SModules.vue";
import SReady from "@/components/SReady.vue";
import { computed, defineComponent } from "@vue/composition-api";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import useRouter from "@/compositions/useRouter";

export default defineComponent({
  name: "Home",

  components: {
    HeaderBlock,
    SRegister,
    SAbout,
    SWhatWillLearn,
    SPromocode,
    SModules,
    SReady,
  },
  setup() {
    const { showByName } = useModal();

    showByName(ModalName.login);
  },
});
</script>
