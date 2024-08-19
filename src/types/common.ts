type LevelData = {
    display_name: string,
    color: string,
};

type AwardInfo = {
    description: string,
    display_name: string,
    color: string,
    image: string,
    level: LevelData,
};

type UserData = { uid: number, qqid: string, name: string };
