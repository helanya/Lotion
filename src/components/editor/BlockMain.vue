<template>
  <div class="outline-transparent flex" :contenteditable="true">
    <div class="mr-10px">
      <v-icon class="handle-drag" name="md-dragindicator-twotone" />
    </div>
    {{ props.block?.details.value }}
  </div>
</template>

<script setup lang="ts">
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
