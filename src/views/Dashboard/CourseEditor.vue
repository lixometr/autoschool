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
            <course-editor-sidebar :units="units"/>
            <div class="col p-0">
              <course-editor-name />
              <div class="pt-2 pb-4 border-bottom border-primary">
                <course-editor-add-btns />
              </div>
              <!-- // -->
              <course-editor-element type="info" />
              <course-editor-element type="question" />
              <course-editor-element type="checklist" />
              <course-editor-element type="test" />
              <course-editor-element type="crosscheck" />
              <course-editor-element type="checkbox" />

              <div class="py-4 px-lg-5 px-3">
                <div class="row">
                  <div class="col-4 mb-2">
                    <button class="btn w-100 btn-md btn-outline-primary btn-bg">
                      {{ $t("editor.deletePartOfUnit") }}
                    </button>
                  </div>
                  <div class="col"></div>
                  <div class="col-4 mb-2">
                    <button class="btn w-100 btn-md btn-primary">
                      {{ $t("editor.savePartOfUnit") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  ></style>

<script>
import CourseEditorBack from "../../components/CourseEditor/CourseEditorBack.vue";
import CourseEditorAddBtns from "../../components/CourseEditor/CourseEditorAddBtns.vue";
import CourseEditorLanguages from "../../components/CourseEditor/CourseEditorLanguages.vue";
import CourseEditorSidebar from "../../components/CourseEditor/CourseEditorSidebar.vue";

import CourseEditorName from "@/components/CourseEditor/CourseEditorName.vue";
import CourseEditorElement from "@/components/CourseEditor/CourseEditorElement.vue";
// import Search from '@/components/icons/Search.vue'
import { useApiGetCoursePart, useApiGetUnits } from "@/api/course";
import { errorHandler } from "@/helpers/error-handler";
import { ref } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";
export default {
  components: {
    CourseEditorSidebar,
    CourseEditorLanguages,
    CourseEditorName,
    CourseEditorAddBtns,
    CourseEditorElement,
    CourseEditorBack,
  },
  setup() {
    const router = useRouter();
    const currentPart = ref({});
    const { exec: fetchUnits, error, result: units } = useApiGetUnits({
      toast: { error: errorHandler() },
    });
    fetchUnits();
    const fetchPart = async () => {
      const { exec, error, result } = useApiGetCoursePart({
        toast: { error: errorHandler() },
      });
      await exec({ id: router.currentRoute.params.id });
      // if (error.value) return router.push({ name: "Dashboard" });
      currentPart.value = result.value;
    };
    fetchPart();
    return { units, currentPart };
  },
};
</script>
