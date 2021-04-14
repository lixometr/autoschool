<template>
  <div class="cabinet-block col-md-auto bg-primary text-white">
    <button class="btn btn-md btn-success w-100 mb-3" @click="askQuestion">
      {{ $t("askQuestion") }}
    </button>
    <div class="small mb-1">{{ $t("email") }}: {{ email }}</div>
    <div class="small mb-3">
      {{ $t("phone") }}:
      <a :href="'tel:' + phone" class="text-white strong">{{ phone }}</a>
    </div>
    <button class="btn btn-md btn-success w-100" @click.prevent="download">
      {{ $t("dashboard.downloadNotification") }}
    </button>
  </div>
</template>

<script lang="ts">
import useModal from "@/compositions/useModal";
import { UserModule } from "@/store/modules/user";
import { ModalName } from "@/types/modal.enum";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const email = computed(() => {
      return UserModule.user.email;
    });
    const phone = computed(() => "+1232434");
    const download = () => {
      return;
    };
    const { showByName } = useModal();
    const askQuestion = () => {
      showByName(ModalName.askQuestion);
    };
    return {
      askQuestion,
      download,
      phone,
      email,
    };
  },
});
</script>

<style >
</style>