import qyRequest from './index'
import type { IResultData } from './index'

export type DetailType = 'oppo' | 'air' | 'watch' | 'tablet'

export const getDetailInfo = (type: DetailType) => {
  return qyRequest.get<IResultData<any>>('/oppoDetail', {
    type
  })
}
