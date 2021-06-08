<template>
  <div class="row pb-3">
    <div class="col-auto">
      <a href="#" class="strong" @click.prevent="download">
        <Download />
        <span class="ms-2">{{ $t("course.downloadMaterial") }}</span>
      </a>
    </div>

    <div class="col-auto">
      <a href="#" class="strong" @click.prevent="print">
        <Print />
        <span class="ms-2">{{ $t("course.print") }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Download from "@/components/icons/Download.vue";
import Print from "@/components/icons/Print.vue";

export default defineComponent({
  components: { Download, Print },
  setup() {
    const download = () => {
      return;
    };
    const print = () => {
      return;
    };
    return { download, print };
  },
});
</script>

<style >
</style>