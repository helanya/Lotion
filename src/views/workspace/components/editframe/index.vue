<template>
  <div class="h-full overflow-x-hidden overflow-y-auto">
    <Editor :content="content" />
  </div>
</template>

<script setup lang="ts">
import Editor from '@/components/editor/index.vue'
import { v4 as uuidv4 } from 'uuid'
import '@/service/index'
const content = ref({
  title: '🧴 Lotion',
  blocks: [
    {
      id: uuidv4(),
      details: {
        value: 'Get Started',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: '👋 Welcome! This is a private page for you to play around with.',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: 'Give these things a try:',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: '1. Hover on the left of each line for quick actions',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: '2. Click on the + button to add a new line',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: '3. Drag the ⋮⋮ button to reorder',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: '4. Click the trash icon to delete this block',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: '5. **Bold** and *italicize* using markdown e.g. \\*\\*bold\\*\\* and \\*italics\\*',
      },
    },
    {
      id: uuidv4(),
      details: {
        value: "6. Add headers and dividers with '#', '##' or '---' followed by a space",
      },
    },
    {
      id: uuidv4(),
      details: {
        value: "7. Type '/' for a menu to quickly switch blocks and search by typing",
      },
    },
  ],
})
</script>

<style scoped></style>
