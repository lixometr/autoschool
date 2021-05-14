<template>
  <div>
    <draggable
      :value="items"
      @input="onItemsChangeOrder"
      handle=".course-editor-item-header"
    >
      <course-editor-element
        :type="item.type"
        :idx="idx + 1"
        :value="item.langContent"
        @up="moveUp(idx)"
        @down="moveDown(idx)"
        @input="onChangeItem($event, idx)"
        @delete="onDeleteItem(idx)"
        v-for="(item, idx) in items"
        :key="idx"
      />
    </draggable>
  </div>
</template>

<script lang="ts">
import CourseEditorElement from "./CourseEditorElement.vue";
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import { CourseEditorItemEntity } from "@/models/course-editor/course-editor-item.entity";
import draggable from "vuedraggable";
export default defineComponent({
  components: { CourseEditorElement, draggable },
  props: {
    value: {
      type: Array,
      default: () => [] as CourseEditorItemEntity[],
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const items = computed(() => value.value as CourseEditorItemEntity[]);
    const onChangeItem = (newValue: any, changedItemIdx: number) => {
      const newItems = [...items.value];
      newItems[changedItemIdx].setLangContent(newValue);
      emit("input", newItems);
    };
    const onDeleteItem = (idx: number) => {
      let newItems = [...items.value];
      newItems.splice(idx, 1);
      emit("input", newItems);
    };
    const onItemsChangeOrder = (sortedItems: any[]) => {
      const newItems = sortedItems.map((item, idx) => {
        item.order = idx + 1;
        return item;
      });
      emit("input", newItems);
    };
    function array_move(arr: any[], old_index: number, new_index: number) {
      arr = [...arr];
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      emit('input', arr)
    }
    const moveUp = (idx: number) => {
      if (idx <= 0) return;
      array_move(items.value, idx, idx - 1);
    };
    const moveDown = (idx: number) => {
      if (idx >= items.value.length - 1) return;
      array_move(items.value, idx, idx + 1);
    };
    return {
      items,
      onChangeItem,
      onDeleteItem,
      onItemsChangeOrder,
      moveUp,
      moveDown,
    };
  },
});
</script>

<style lang="scss" >
</style>