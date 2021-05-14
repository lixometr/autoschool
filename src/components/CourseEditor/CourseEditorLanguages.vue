<template>
  <div class="col d-flex border-bottom border-light">
    <a
      href="#"
      class="add-lang"
      v-for="(language, idx) in languages"
      :key="idx"
      :class="{ active: activeLanguage === language }"
      @click="selectLanguage(language)"
      >{{ language }} <Close v-if="language !== defaultLanguage" class="ms-2" @click.native="removeLanguage(language)"
    /></a>
    <a href="#" class="add-lang add-lang--link" @click.prevent="addLanguage"
      >+ {{ $t("editor.addLanguage") }}</a
    >
  </div>
</template>

<script lang="ts">
import useModal from "@/compositions/useModal";
import { CourseModule } from "@/store/modules/course";
import { ModalName } from "@/types/modal.enum";
import { computed, defineComponent } from "@vue/composition-api";
import Close from "@/components/icons/Close.vue";
export default defineComponent({
  components: { Close },
  setup() {
    const addLanguage = () => {
      const { showByName } = useModal();
      showByName(ModalName.addLanguage);
      return;
    };
    const activeLanguage = computed(() => CourseModule.activeLanguage);
    const languages = computed(() => CourseModule.allLanguages);
    const selectLanguage = (name: string) => {
      CourseModule.setActiveLanguage(name);
    };
    const removeLanguage = (name: string) => {
      CourseModule.removeLanguage(name);
    };
    const defaultLanguage = computed(() => CourseModule.defaultLanguage)
    return {
      defaultLanguage,
      addLanguage,
      languages,
      activeLanguage,
      selectLanguage,
      removeLanguage,
    };
  },
});
</script>

<style scoped>
</style>