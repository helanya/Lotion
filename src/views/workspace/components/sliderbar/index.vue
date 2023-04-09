<template>
  <div class="h-full w-280px relative">
    <div class="flex flex-row">
      <UserInfo />
    </div>
    <div class="col-cursor"></div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './UserInfo.vue'
</script>

<style scoped>
.col-cursor {
  @apply h-full absolute w-12px right--6px;
  cursor: col-resize;
  top: 0;
}
</style>
