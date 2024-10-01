export type LevelData = {
  display_name: string
  color: string
  lid: number
}

export type AwardInfo = {
  aid: number
  description: string
  display_name: string
  color: string
  image_url: string
  level: LevelData
  sorting: number
}

export type UserData = { name: string; uid?: number }

export type GetAward = {
  info: AwardInfo
  count: number
  is_new: boolean
}

export type DialogueMessage = {
  text: string
  speaker: string
  face: string
}
