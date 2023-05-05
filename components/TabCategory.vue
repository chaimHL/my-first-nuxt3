<!-- 分类导航 -->
<script lang="ts" setup>
interface IProps {
  categorys: any[]
}
withDefaults(defineProps<IProps>(), {
  categorys: () => []
})

const emits = defineEmits<{
  (e: 'itemClick', item: any): void
}>()
function handleClickItem(item: any) {
  emits('itemClick', item)
}
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="item in categorys" :key="item.id" :span="3">
        <div class="category-item" @click="handleClickItem(item)">
          <img :src="item.picStr" alt="" />
          <div>{{ item.title }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.category-item {
  margin-top: 40px;
  cursor: pointer;
  @include normalFlex(space-between, center, column);
  img {
    width: 120px;
  }
}
</style>
