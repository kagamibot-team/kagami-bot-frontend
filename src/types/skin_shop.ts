import { AwardInfo, DialogueMessage, SkinData, UserData } from './common';

export type SkinBook = {
    image: string
    level: number
    name: string
    isDrawable: boolean
    price: number
    doUserHave: boolean
}

export type SkinShop = {
    user: UserData
    chips: number
    biscuits: number
    skins: SkinBook[]
    skinPackPrice: number
    dialog: DialogueMessage
}
