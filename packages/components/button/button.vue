<template>
  <button :class="newestClass">
    <span>
        <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'newButton'
}
</script>
<script setup>
import { computed } from 'vue'
import './style.scss'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: String,
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  icon: String,
  iconPosition: String
})
//图标
const iconFont = computed(() => {
  const iconName = props.icon
  const iconPosition = props.iconPosition
  return {
    iconName,
    iconPosition
  }
})
const newestClass = computed(() => {
  return [
    'newest-button',
    `newest-button-${props.type}`,
    { 'is-round': props.round },
    { 'is-disabled': props.disabled },
    props.size ? `newest-button-${props.size}` : '',
    props.plain ? 'is-plain' : ''
  ]
})
</script>
<style scoped lang="scss">
.newest-button {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
