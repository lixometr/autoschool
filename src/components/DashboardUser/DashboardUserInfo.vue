<template>
  <div class="col">
    <div class="h6 strong">
      {{ name }}
      <br />
      {{ lastName }}
    </div>
    <div class="row pb-1">
      <div class="col-auto mb-2"><router-link to="#">Edit profile</router-link></div>
      <div class="col-auto mb-2">
        <a href="#" @click.prevent="download">Download reciept</a>
      </div>
    </div>
    <div class="small mb-3">Expiration Date: 1/19/2021 9:50:36 PM</div>
  </div>
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const name = computed(() => UserModule.user.first_name);
    const lastName = computed(() => UserModule.user.last_name);
    const download = () => {
      return;
    };
    return { name, lastName };
  },
});
</script>

<style >
</style>