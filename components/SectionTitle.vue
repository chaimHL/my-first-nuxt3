<!-- 标题 -->
<script lang="ts" setup>
interface IProps {
  title: string
}
withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<template>
  <h2 class="title">{{ title }}</h2>
</template>

<style scoped lang="scss">
.title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
}
</style>
