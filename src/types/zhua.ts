import { GetAward, UserData } from './common'

export type ZhuaMeta = {
  field_from: number
  get_chip: number
  own_chip: number
  remain_time: number
  max_time: number
  need_time: string
}

export type ZhuaData = {
  user: UserData
  meta: ZhuaMeta
  catchs: Array<GetAward>
}
