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

type SingleLiechang = {
    pack_id: number,
    award_count: Array<{
        level: LevelData,
        collected: number,
        sum_up: number,
    }>,
    featured_award: AwardInfo,
    unlocked: boolean,
};

type UserData = { uid: number, qqid: string, name: string };


type LQRExpression = { text: string, face: string }

type LiechangData = {
    packs: Array<SingleLiechang>,
    user: UserData,
    selecting: number,
    expression: LQRExpression,
};