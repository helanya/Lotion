<template>
  <div class="h-full w-280px relative bg-light-100 flex-shrink-0" :style="{width: `${sliderWidth}px`}">
    <div class="flex flex-col">
      <UserInfo />
      <BlockList :blocks="blocks" />
    </div>
    <div class="col-cursor" @mousedown="handleSliderResize"></div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import BlockList from './BlockList.vue'
import { clamp } from '@/utils'
import { getBlocks, IBlocks } from '@/api/block'

let blocks = ref<IBlocks[]>([])

onMounted(async () => {
  // eslint-disable-next-line no-console
  blocks.value =  (await getBlocks()).result as IBlocks[]

})

let sliderWidth = ref(280)
const sliderMinWidth = 200
const sliderMaxWidth = 450
let isViewResizing = ref(false)


const handleStartResizing = (event: MouseEvent) => {
  if (!isViewResizing) return
  sliderWidth.value = clamp(event.clientX, sliderMinWidth, sliderMaxWidth)
}

const handleEndResizing = () => {
  window.removeEventListener('mousemove', handleStartResizing)
  window.removeEventListener('mouseup', handleEndResizing)
}

const handleSliderResize = () => {
  isViewResizing.value = true
  window.addEventListener('mousemove', handleStartResizing)
  window.addEventListener('mouseup',  handleEndResizing)
}
</script>

<style scoped>
.col-cursor {
  @apply h-full absolute w-12px right--6px;
  cursor: col-resize;
  top: 0;
}
</style>
