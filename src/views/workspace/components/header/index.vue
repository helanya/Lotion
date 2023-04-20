<template>
  <div class="flex h-44px items-center px-10px flex-shrink-0">
    <div class="color-#37352f leading-tight b-rd-4px cursor-pointer hover:bg-gray-200 px-4px">
      <div class="max-w-250px">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref('Untitled')
</script>

<style scoped></style>
