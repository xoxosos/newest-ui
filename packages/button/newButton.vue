<template>
  <div :class="newestClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>
<script setup>
import {computed} from "vue";
const props = defineProps({
  type:{
    type:String,
    default:"default"
  }
})
const newestClass = computed(() => {
  return ['newest-button', `newest-button-${props.type}`]
})
</script>
<style scoped lang="scss">
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.newest-button {
  button {
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
}
.newest-button-default {
button {
  background: #b4b0b0;
  color: #000;
}
}
.newest-button-success {
button {
  background: #0eac77;
  color: #fff;
}
}
.newest-button-warning {
button {
  background: red;
  color: #fff;
}
}

</style>