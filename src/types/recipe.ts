type MergeMeta = {
    cost_chip: number,
    own_chip: number,
    is_strange: boolean,
    status: string,
};

type YMHMessage = {
    text: string,
    image: string,
};

type MergeData = {
    user: UserData,
    meta: MergeMeta,
    output: GetAward,
    inputs: Array<AwardInfo>,
    ymh_message: YMHMessage,
};
