type Product = {
    title: string,
    price: number,
};

type BuyData = {
    date: string,
    time: string,
    user: UserData,
    cost_chips: number,
    remain_chips: number,
    qrcode_url: string

    records: Array<Product>,
};