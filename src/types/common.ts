type LevelData = {
    display_name: string,
    color: string,
    lid: number,
};

type AwardInfo = {
    aid: number,
    description: string,
    display_name: string,
    color: string,
    image_url: string,
    level: LevelData,
    sorting: number,
};

type UserData = { name: string };

type GetAward = {
    info: AwardInfo,
    count: number,
    is_new: boolean,
};
