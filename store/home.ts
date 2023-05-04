import { defineStore } from 'pinia'
import { getHomeInfo } from '~/service/home'
import type { HomeInfoType } from '~/service/home'

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      navbars: [],
      banners: [],
      categorys: []
    }
  },
  actions: {
    async fetchHomeInfoData(type: HomeInfoType) {
      const { data } = await getHomeInfo(type)
      this.navbars = data.value?.data.navbars || []
      this.banners = data.value?.data.banners || []
      this.categorys = data.value?.data.categorys || []
    }
  }
})
