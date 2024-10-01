import { AwardInfo, GetAward, UserData } from './common'

export type MergeMeta = {
  user: UserData
  cost_chip: number
  own_chip: number
  status: string
  is_strange: boolean
}

export type MergeData = {
  inputs: Array<AwardInfo>
  after_storages: Array<number>
  light_off: Array<boolean>
  possibility: number
  output: GetAward
  recipe_id: number
  stat_id: number
  last_time: string
  meta?: MergeMeta
}

export type RecipeArchiveData = {
  user: UserData
  recipes: Array<MergeData>
  product: AwardInfo
  cost_chip: number
  own_chip: number
  good_enough: boolean
}
