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

type LiechangData = {
    packs: Array<SingleLiechang>,
    user: UserData,
    selecting: number,
    dialogue: DialogueMessage,
    chips: number,
};
