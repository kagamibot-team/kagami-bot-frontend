import { AwardInfo, DialogueMessage, LevelData, UserData } from './common'

export type LiechangCountInfo = {
  level: LevelData
  collected: number
  sum_up: number
}

export type SingleLiechang = {
  pack_id: number
  award_count: Array<LiechangCountInfo>
  featured_award: AwardInfo
  unlocked: boolean
}

export type LiechangData = {
  packs: Array<SingleLiechang>
  user: UserData
  selecting: number
  dialogue: DialogueMessage
  chips: number
}
