<template>
  <div class="col-auto">
    <div class="lang-block">
      <div class="lang-block__toggle">
        <div class="lang-block__img-wrap">
          <img :src="activeLang.icon" alt="" />
        </div>
      </div>
      <div class="lang-block__dropdown">
        <div
          class="lang-block__dropdown-item"
          v-for="(lang, idx) in languages"
          :key="idx"
          @click="selectLanguage(lang.key)"
        >
          <div class="lang-block__img-wrap">
            <img :src="lang.icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { LanguageTypes } from "@/types/constants";
import useTranslate from "@/compositions/useTranslate";
export default defineComponent({
  setup() {
    const activeLocale = computed(() => useTranslate().i18n.locale);
    const languages = computed(() => {
      return Object.keys(LanguageTypes)
        .filter((key) => key !== activeLocale.value)
        .map((key) => ({ ...LanguageTypes[key], key }));
    });
    const activeLang = computed(() => {
      return LanguageTypes[activeLocale.value];
    });
    const selectLanguage = (key: string) => {
      useTranslate().i18n.locale = key;
    };
    return { activeLang, languages, selectLanguage };
  },
});
</script>

<style lang="scss" >
</style>