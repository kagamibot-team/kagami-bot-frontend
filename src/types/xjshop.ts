type Product = {
    title: string,
    price: number,
};

type BuyData = {
    date: string,
    time: string,
    user: UserData,
    remain_chips: number,
    records: Array<Product>,
};