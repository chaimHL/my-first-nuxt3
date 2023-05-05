<!-- 首页 -->
<script lang="ts" setup>
import { useHomeStore } from '~/store/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

function onItemClick(item: any) {
  // 使用编程导航(不利于 seo)
  return navigateTo({
    path: '/detail',
    query: {
      type: item.type
    }
  })
}
</script>

<template>
  <div class="home">
    <div class="wrapper">
      <Swiper :banners="banners" />
      <TabCategory :categorys="categorys" @itemClick="onItemClick" />
      <template v-for="item in categorys" :key="item.id">
        <SectionTitle :title="item.title" />
        <GridView :items="item.productDetailss" :url="item.url" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
