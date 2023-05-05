<!-- 详情页 -->
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useDetailStore } from '~/store/detail'
import type { DetailType } from '~/service/detail'
import type { TabsPaneContext } from 'element-plus'

const route = useRoute()
const { type } = route.query
const detailStore = useDetailStore()
const { details } = storeToRefs(detailStore)
detailStore.fetchDetailData(type as DetailType)

const activeName = ref(details.value[0]?.title)

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
</script>

<template>
  <div class="detail">
    <div class="wrapper">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in details"
          :key="item.id"
          :label="item.title"
          :name="item.title"
        >
          <GridView :items="item.productDetailss" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  background-color: $bgGrayColor;
  :deep(.el-tabs__header) {
    background-color: #fff;
  }
}
</style>
