type MergeMeta = {
    cost_chip: number,
    own_chip: number,
    is_strange: boolean,
    status: string,
};

type DialogueMessage = {
    text: string,
    face: string,
    speaker: string,
};

type MergeData = {
    user: UserData,
    meta: MergeMeta,
    output: GetAward,
    inputs: Array<AwardInfo>,
};
