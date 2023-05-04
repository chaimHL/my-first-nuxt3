<!-- 轮播 -->
<script lang="ts" setup>
interface IProps {
  banners: any[]
}
withDefaults(defineProps<IProps>(), {
  banners: () => []
})
</script>

<template>
  <div>
    <el-carousel height="480px">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img :src="item.picStr" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss"></style>
