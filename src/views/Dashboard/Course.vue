<template>
  <div class="container pt-0">
    <div class="cabinet-block p-0 bg-white">
      <course-controller :key="$route.params.id" :id="$route.params.id" />
    </div>
  </div>
</template>

<script lang="ts">
import CourseController from "../../components/Course/CourseController.vue";
import CourseSidebar from "../../components/Course/CourseSidebar.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { useApiGetCoursePart, useApiGetUnits } from "@/api/course";
import { errorHandler } from "@/helpers/error-handler";
import useRouter from "@/compositions/useRouter";

export default defineComponent({
  components: {
    CourseController,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" >
</style>