type LiechangCountInfo = {
    level: LevelData,
    collected: number,
    sum_up: number,
};


type SingleLiechang = {
    pack_id: number,
    award_count: Array<LiechangCountInfo>,
    featured_award: AwardInfo,
    unlocked: boolean,
};

type LQRExpression = { text: string, face: string }

type LiechangData = {
    packs: Array<SingleLiechang>,
    user: UserData,
    selecting: number,
    expression: LQRExpression,
    chips: number,
};
