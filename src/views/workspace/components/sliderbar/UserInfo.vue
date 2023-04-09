<template>
  <div class="h-44px w-full flex-center text-14px">{{ user.name }}</div>
</template>

<script setup lang="ts">
const user = ref({
  name: 'Lotion',
})
</script>

<style scoped></style>
