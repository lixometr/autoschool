<template>
  <div class="container pt-0">
    <div class="cabinet-block p-0 bg-white">
      <div class="cabinet-block__head p-0 border-bottom border-light">
        <div class="row mx-0">
          <div
            class="col-auto border-right d-flex align-items-center border-end"
          >
            <router-link :to="backLink" class="link-back">
              <ChevronLeft />
              <span class="ms-3 d-none d-md-inline fw-600">{{ backText }}</span>
            </router-link>
          </div>
          <div class="col">
            <div class="row align-items-center">
              <div class="col h4 strong mb-0 py-2">{{ title }}</div>
              <div class="col-auto py-3">
                <button
                  class="btn btn-normal btn-outline-primary px-3"
                  v-if="showAdd"
                  @click="onAdd"
                >
                  + {{ $t("add") }}
                  <span class="d-none d-md-inline">{{ addText }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cabinet-block__body p-3">
        <div class="row g-3" v-if="showSearch">
          <div class="col">
            <div class="search-block">
              <form action="#" @submit.prevent="onSearch">
                <button class="search-block__btn"><Search /></button>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="searchPhrase"
                />
              </form>
            </div>
          </div>
          <div class="col-auto">
            <button
              class="btn btn-normal btn-outline-primary px-lg-5"
              @click="onSearch"

            >
              {{ $t("search") }}
            </button>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import ChevronLeft from "@/components/icons/ChevronLeft.vue";
// import Lock from '@/components/icons/Lock.vue'
import Search from "@/components/icons/Search.vue";
export default defineComponent({
  components: {
    Search,
    ChevronLeft,
  },
  props: {
    showSearch: {
      type: Boolean,
      default: true,
    },
    backText: {
      type: String,
    },
    title: {
      type: String,
    },
    backLink: [Object, String],
    addText: {
      type: String,
    },
    showAdd: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const searchPhrase = ref("");
    const onSearch = () => {
      emit("search", searchPhrase.value);
    };
    const onSort = () => {
      emit("sort");
    };
    const onAdd = () => {
      emit("add");
    };
    return {
      onAdd,
      onSearch,
      searchPhrase,
      onSort,
    };
  },
});
</script>

<style >
</style>