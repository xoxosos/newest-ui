<script setup>
// import {newButton} from 'newest-ui'

import NewButton from "../packages/components/button/button.vue";
</script>

<template>
  <newButton>默认按钮</newButton>
  <newButton type="danger" >button</newButton>
  <newButton type="danger" size="mini" disabled>按钮</newButton>
  <new-button type="primary"  size="default" >测试按钮</new-button>
  <new-button type="warning"  size="large" >测试按钮</new-button>
  <new-button type="success" plain round disabled size="mini" >测试按钮</new-button>
  <new-button type="info" plain>测试按钮</new-button>
  <new-button type="text"  >测试按钮</new-button>
</template>

<style scoped>
</style>
