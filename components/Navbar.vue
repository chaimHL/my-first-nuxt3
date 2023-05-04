<!-- 导航 -->
<script lang="ts" setup>
interface IProps {
  navbars: any[]
}
withDefaults(defineProps<IProps>(), {
  navbars: () => []
})

const curIndex = ref(0)

function handleClickNav(index: number) {
  curIndex.value = index
}

const pagePath = computed(() => {
  return (item: any) => {
    let path = '/'
    if (item.type !== 'oppo') {
      path += item.type
    }
    return path
  }
})
</script>

<template>
  <div>
    <div class="wrapper">
      <NuxtLink class="left" to="/">
        <img src="@/assets/imgs/logo.svg" alt="" />
        <h1 class="title">为了seo优化</h1>
      </NuxtLink>
      <ul class="center">
        <template v-for="(item, index) in navbars" :key="item.id">
          <li @click="handleClickNav(index)">
            <NuxtLink
              :to="pagePath(item)"
              :class="{ active: curIndex === index }"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
      <div class="right">搜索框组件</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @include normalFlex();
  padding: 12px 0;
  .left {
    display: inline-block;
    width: 200px;
    .title {
      text-indent: -1000px;
      height: 0;
      margin: 0;
    }
  }
  .center {
    @include normalFlex(space-around);
    flex-grow: 1;
  }
  .right {
    width: 200px;
  }
}

.active {
  text-decoration: none;
  font-weight: bold;
  color: #333;
}
</style>
