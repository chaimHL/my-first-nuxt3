<!-- 网格布局 -->
<script lang="ts" setup>
interface IProps {
  items: any[]
  url: string
}
withDefaults(defineProps<IProps>(), {
  items: () => [],
  url: ''
})
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col v-if="url" :span="8">
        <div class="first-img">
          <img :src="url" alt="" />
        </div>
      </el-col>
      <el-col v-for="item in items" :key="item.id" :span="4">
        <div class="item">
          <div class="pic">
            <img :src="item.url" alt="" />
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.first-img {
  overflow: hidden;
  border-radius: 8px;
  height: 270px;
  cursor: pointer;
  &:hover {
    @include hoverEffect();
  }
  img {
    height: 100%;
  }
}
.item {
  padding: 12px;
  margin-bottom: 20px;
  height: 270px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 8px;
  @include normalFlex(space-around, center, column);
  &:hover {
    @include hoverEffect();
  }
  .pic {
    width: 160px;
    img {
      width: 100%;
    }
  }
}
</style>
