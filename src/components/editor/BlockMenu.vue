<template>
  <div
    class="w-40px flex justify-end items-center mr-10px cursor-pointer"
  >
    <Tooltip>
      <v-icon
        class="handle-drag w-6 h-6 hover:bg-neutral-100 hover:text-neutral-400 p-0.5 rounded group-hover:opacity-100 opacity-0"
        name="md-dragindicator-twotone"
        fill="#999"
      />
      <template #content>
        <div
          class="w-120px text-center leading-4"
        >
          Drag
          <span class="text-#aaa"
            >to move</span
          >
        </div>
        <div
          class="text-center leading-4"
        >
          Click
          <span class="text-#aaa"
            >to open menu</span
          >
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import Tooltip from '@/components/Tooltip.vue'
</script>

<style scoped></style>
