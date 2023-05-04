<template>
  <div class="app-header">
    <div class="wrapper">
      <div class="left">
        <NuxtLink to="/" class="link">首页</NuxtLink>
      </div>
      <div class="right">
        <NuxtLink to="/login" class="link" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhanghaodenglu"></use>
          </svg>
          登录
        </NuxtLink>
        <NuxtLink to="/register" class="link" target="_blank">注册</NuxtLink>
        <NuxtLink to="/" class="link">购物车</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-header {
  @include elementSticky(0, 110);
  background-color: #000;
  padding: 8px 0;
  .wrapper {
    @include normalFlex();
    .right {
      @include normalFlex(flex-start);
      column-gap: 20px;
    }
    .link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
