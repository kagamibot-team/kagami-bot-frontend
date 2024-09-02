import { UserData } from "./common";

export type Product = {
    title: string,
    price: number,
};

export type BuyData = {
    date: string,
    time: string,
    user: UserData,
    remain_chips: number,
    records: Array<Product>,
};