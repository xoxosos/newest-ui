<template>
    <button class="testButtonClass">
      <slot></slot>
    </button>

</template>

<script>
export default {
  name: "newButton"
}
</script>
<script setup>
const props = defineProps({
  type:{
    type:String,
    default:"default"
  }
})
</script>
<style scoped>
.testButtonClass{
  background-color: green;
}

</style>