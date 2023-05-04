<script lang="ts" setup>
import { useHomeStore } from '~/store/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { navbars } = storeToRefs(homeStore)
homeStore.fetchHomeInfoData('oppo')
</script>
<template>
  <div class="layout">
    <AppHeader />
    <Navbar :navbars="navbars" />
    <slot></slot>
    <AppFooter />
  </div>
</template>
