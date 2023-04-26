<template>
  <div class="p-4px border-solid border-transparent border-t-[#eee]">
    <div class="px-4 flex items-center leading-28px overflow-hidden text-#19171199 text-14px  hover:bg-#ddd rounded-2px cursor-pointer" v-for="block in blocks" :key="block.id">
      <span>{{ block.emoji }}</span>
      <span class="ml-4px">{{ block.title }}</span>
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { IBlocks } from '@/api/block'
defineProps<{
  blocks: IBlocks[]
}>()
</script>

<style scoped>

</style>