// 各种库存等的视图的定义

type DisplayBoxData = {
    image: string,
    color: string,
    notation_up?: string,
    notation_down?: string,
    new_overlay?: boolean,
    notation_down_color?: string,
    notation_up_color?: string,
};

type BookBoxData = {
    display_box: DisplayBoxData,
    title1: string,
    title2?: string,
};

// 库存界面
type StorageData = {
    user: UserData,
    boxes: Array<BookBoxData>,
};
