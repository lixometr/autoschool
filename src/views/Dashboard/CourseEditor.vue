<template>
  <div
    class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border"
  >
    <div class="container pt-0">
      <div class="cabinet-block p-0 bg-white">
        <div class="cabinet-block__head p-0">
          <div class="row mx-0">
            <course-editor-back />
            <course-editor-languages />
          </div>
        </div>
        <div class="cabinet-block__body">
          <div class="row mx-0">
            <course-editor-sidebar v-model="units" @refresh="fetchUnits" />
            <course-editor-controller
              :id="$route.params.id"
              :isNew="isNew"
              :key="$route.params.id"
              @delete="onPartDelete"
              @save="fetchUnits"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  ></style>

<script lang="ts">
import CourseEditorController from "../../components/CourseEditor/CourseEditorController.vue";
import CourseEditorTasks from "../../components/CourseEditor/CourseEditorTasks.vue";
import CourseEditorBack from "../../components/CourseEditor/CourseEditorBack.vue";
import CourseEditorAddBtns from "../../components/CourseEditor/CourseEditorAddBtns.vue";
import CourseEditorLanguages from "../../components/CourseEditor/CourseEditorLanguages.vue";
import CourseEditorSidebar from "../../components/CourseEditor/CourseEditorSidebar/CourseEditorSidebar.vue";

import CourseEditorName from "@/components/CourseEditor/CourseEditorName.vue";

import { useApiGetUnits } from "@/api/course";
import { computed, ref, toRefs, watch } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";
import { CourseEditorPartEntity } from "@/models/course-editor/course-editor-part.entity";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
export default {
  components: {
    CourseEditorSidebar,
    CourseEditorLanguages,
    CourseEditorBack,
    CourseEditorController,
  },
  props: {
    isNew: Boolean,
  },
  setup(props) {
    const { isNew } = toRefs(props);
    const router = useRouter();
    const partId = computed(() => parseInt(router.currentRoute.params.id));
    const { exec: fetchUnits, error, result: units } = useApiGetUnits({
      toast: { error: errorHandler() },
    });
    fetchUnits();
    const onPartDelete = () => {
      // const newId = 0;
      // router.push({name: "CourseEditor", params: {id: newId}})
      fetchUnits();
      return;
    };

    return { partId, fetchUnits, units, onPartDelete };
  },
};
</script>

