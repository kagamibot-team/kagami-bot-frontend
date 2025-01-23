import { DialogueMessage, UserData } from './common';

export type SkinBook = {
    image: string
    level: number
    name: string
    is_drawable: boolean
    price: number
    do_user_have: boolean
}

export type SkinShop = {
    user: UserData
    chips: number
    biscuits: number
    skins: SkinBook[]
    skin_pack_price: number
    dialog: DialogueMessage
}
