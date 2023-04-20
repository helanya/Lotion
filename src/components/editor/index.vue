<template>
  <div class="mx-auto my-24 font-sans text-base outline-transparent max-w-100% min-w-0 w-900px">
    <h1 class="">{{ props.content?.title }}</h1>
    <Draggable :list="props.content?.blocks" handle=".handle-drag">
      <transition-group>
        <BlockComponent v-for="block in props.content?.blocks" :key="block.id" :id="block.id" :blockTypes="block.blockType" :block="block" />
      </transition-group>
    </Draggable>
  </div>
</template>

<script setup lang="ts">
import BlockComponent from './BlockMain.vue'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'

interface Details {
  value: string
}
interface Block {
  id: string
  blockType?: string
  details: Details
}

interface Content {
  title: string
  blocks: Block[]
}
interface Props {
  content?: Content
}
const props = defineProps<Props>()
</script>

<style scoped></style>
