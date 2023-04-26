<template>
  <div
    class="outline-transparent flex item-center group py-3px"
  >
    <BlockMenu />
    {{ props.block?.details.value }}
  </div>
</template>

<script setup lang="ts">
import BlockMenu from './BlockMenu.vue'
interface Details {
  value: string
}
interface Block {
  id: string
  blockType?: string
  details: Details
}

const props = defineProps<{
  block?: Block
}>()
</script>

<style scoped></style>
