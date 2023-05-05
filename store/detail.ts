import { defineStore } from 'pinia'
import { getDetailInfo } from '~/service/detail'
import type { DetailType } from '~/service/detail'

interface IDetailObj {
  id: number
  productDetailss: any[]
  title: string
}

export const useDetailStore = defineStore('detail', {
  state: () => {
    return {
      details: [] as IDetailObj[]
    }
  },
  actions: {
    async fetchDetailData(type: DetailType) {
      const { data } = await getDetailInfo(type)
      this.details = data.value?.data || []
    }
  }
})
