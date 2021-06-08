<template>
  <div
    class="aside order-lg-0 order-last col-lg-3 p-0 border-end border-primary"
  >
    <router-link
      :to="{ name: 'Dashboard' }"
      class="w-100 ps-4 d-flex align-items-center btn-back btn btn-primary border-end"
    >
      <ChevronLeft />
      <span class="ms-3 fw-600">{{ $t("backToDashboard") }}</span>
    </router-link>
    <div class="py-4 px-4">
      <course-sidebar-time :progress="progress" />
    </div>

    <div class="pb-4 px-4">
      <div
        class="menu-q pb-3"
        v-for="(unit, i) in units"
        :key="i"
        :class="{ disabled: activeUnitId !== unit.id }"
      >
        <div class="h5 strong">{{ unit.langName.value }}</div>
        <ul class="ms-3" v-for="(part, idx) in unit.pages" :key="idx">
          <li @click="openPart(part.id)">
            <span
              :class="{ 'text-primary': parseInt(activePartId) === part.id }"
              >{{ part.langName.value }}</span
            >
          </li>
        </ul>
      </div>
      <div class="menu-q pb-3 disabled">
        <div class="h5 strong">Unit 2</div>
      </div>
      <div class="menu-q pb-3 disabled">
        <div class="h5 strong">Unit 3</div>
      </div>
      <div class="menu-q pb-3 disabled">
        <div class="h5 strong">Unit 4</div>
      </div>
      <div class="menu-q pb-3 disabled">
        <div class="h5 strong">Unit 5</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CourseSidebarTime from "./CourseSidebarTime.vue";
import ChevronLeft from "@/components/icons/ChevronLeft.vue";
import { computed, ref, toRefs } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";

export default {
  name: "AsideQ",
  components: {
    ChevronLeft,
    CourseSidebarTime,
  },
  props: {
    units: {
      type: Array,
      default: () => [],
    },
    activePartId: String,
    activeUnitId: Number,
  },
  setup(props, { emit }) {
    const { activePartId, units } = toRefs(props);
    const router = useRouter();
    const progress = ref(20);
    const openPart = (id: number) => {
      emit("open", id);
    };

    return { progress, openPart };
  },
};
</script>

<style lang="scss">
</style>