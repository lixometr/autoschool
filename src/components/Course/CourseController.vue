<template>
  <div class="row mx-0">
    <course-sidebar
      :units="units"
      @open="openPart"
      :activePartId="$route.params.id"
      :activeUnitId="part.parent_id"
    />

    <div class="col py-4 px-lg-5 px-3">
      <course-header />
      <div class="h4 strong text-primary">
        {{ partName }}
      </div>
      <course-actions />
      <course-content :items="tasks" v-model="values" />
      <course-footer @next="onNext" />
    </div>
  </div>
</template>

<script lang="ts">
import CourseSidebar from "./CourseSidebar.vue";
import CourseFooter from "./CourseFooter.vue";
import CourseContent from "./CourseContent.vue";
import CourseActions from "./CourseActions.vue";
import CourseHeader from "./CourseHeader.vue";
import { computed, defineComponent, ref, toRefs } from "@vue/composition-api";
import { errorHandler } from "@/helpers/error-handler";
import { useApiGetCoursePart, useApiGetUnits } from "@/api/course";
import useRouter from "@/compositions/useRouter";
import { CourseEditorPartEntity } from "@/models/course-editor/course-editor-part.entity";

export default defineComponent({
  components: {
    CourseHeader,
    CourseActions,
    CourseContent,
    CourseFooter,
    CourseSidebar,
  },
  props: {
    id: String,
  },
  setup(props) {
    const router = useRouter();
    const { id } = toRefs(props);
    const part = ref({} as CourseEditorPartEntity);
    const fetchPart = async () => {
      const { exec, result, error } = useApiGetCoursePart({
        toast: { error: errorHandler() },
        loading: true,
      });
      await exec({ id: parseInt(id.value) });
      if (error.value) return;
      part.value = result.value;
    };
    fetchPart();
    const units = ref([]);
    const fetchUnits = async () => {
      const { exec, result, error } = useApiGetUnits({
        toast: { error: errorHandler() },
        loading: true,
      });
      await exec();
      if (error.value) return;
      units.value = result.value;
    };
    fetchUnits();

    const openPart = (id: number) => {
      router.push({ name: "Course", params: { id: String(id) } });
    };
    const partName = computed(() => part.value?.langName?.value);
    const tasks = computed(() => part.value?.tasks || []);
    const values = ref({});
    const onNext = () => {
      return;
    };
    return { units, openPart, part, partName, tasks, values, onNext };
  },
});
</script>

<style >
</style>