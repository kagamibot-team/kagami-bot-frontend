type LevelData = {
    display_name: string,
    color: string,
    lid: number,
};

type AwardInfo = {
    description: string,
    display_name: string,
    color: string,
    image: string,
    level: LevelData,
};

type UserData = { uid: number, qqid: string, name: string };

type GetAward = {
    info: AwardInfo,
    count: number,
    is_new: boolean,
};
