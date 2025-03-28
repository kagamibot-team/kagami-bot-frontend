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

export type SkinShopBought = {
    user: UserData
    rest_money: number
    cost: number
    unit: string
    image?: string
    name: string
    current_count?: number
    from_award_name?: string
    level?: number
}

export type SkinPackOpen = {
    user: UserData
    // biscuit_delta?: {
    //     delta: number
    //     after: number
    // }
    biscuit_return: number,
    biscuit_after: number,
    do_user_have_before: boolean,
    image: string
    level: number
    dialog: DialogueMessage
    skin_name: string
    skin_award_name: string
}
