<template>
  <div class="flex w-full h-100vh">
    <SliderBar />
    <div class="flex-col w-full">
      <HeadWrap />
      <EditFrame />
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderBar from './components/sliderbar/index.vue'
import HeadWrap from './components/header/index.vue'
import EditFrame from './components/editframe/index.vue'
</script>

<style scoped></style>
