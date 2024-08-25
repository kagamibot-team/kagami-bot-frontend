// 各种库存等的视图的定义

export type DisplayBoxData = {
    image: string,
    color: string,
    notation_up?: string,
    notation_down?: string,
    new_overlay?: boolean,
    notation_down_color?: string,
    notation_up_color?: string,
    do_glow?: boolean,
    glow_type?: number,
};

type BookBoxData = {
    display_box: DisplayBoxData,
    title1: string,
    title2?: string,
};

// 例如抓进度界面的一个等级分类
type StorageUnit = {
    title?: string, // 为空则不显示标题
    title_color?: string,
    elements: Array<BookBoxData>,
};

// 库存界面
type StorageData = {
    user: UserData,
    boxes: Array<StorageUnit>,
    title_text?: string,
};
