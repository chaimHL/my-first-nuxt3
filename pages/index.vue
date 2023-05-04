<!-- 首页 -->
<script lang="ts" setup>
import { useHomeStore } from '~/store/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { banners } = storeToRefs(homeStore)
</script>

<template>
  <div class="home">
    <div class="wrapper">
      <Swiper :banners="banners" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
