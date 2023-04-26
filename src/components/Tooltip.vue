<template>
  <div
    class="tooltip relative"
    @mouseenter="handleShow"
    @mouseleave="handleHide"
  >
    <slot></slot>
    <div
      v-show="visible"
      class="content absolute bg-#333 text-xs text-#eee rounded-4px p-4px"
      ref="tooltip"
    >
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface TooltipProps {
  content?: string
  trigger?: 'click' | 'hover'
  placement?: ''
}

defineProps<TooltipProps>()
let visible = ref(false)
const tooltip = ref(null)

const handleShow = () => {
  visible.value = true
}

const handleHide = () => {
  visible.value = false
}
</script>

<style scoped>
.tooltip-trigger {
  cursor: pointer;
}

.content {
  width: fit-content;
  z-index: 999;
  left: 50%;
  bottom: -8px;
  transform: translate(-50%, 100%);
}
</style>
