import qyRequest from './index'
import type { IResultData } from './index'

export type HomeInfoType = 'oppo' | 'onePlus' | 'intelligent'

export const getHomeInfo = (type: HomeInfoType) => {
  return qyRequest.get<IResultData<any>>('/home/info', {
    type
  })
}
