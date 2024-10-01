export type HelpPair = {
  key: string
  value: string
}

export type HelpParam = {
  note: string
  content: Array<HelpPair>
}

export type HelpData = {
  command: string
  description: string
  required_parameters?: HelpParam
  optional_parameters?: HelpParam
  related_commands?: HelpParam
}
