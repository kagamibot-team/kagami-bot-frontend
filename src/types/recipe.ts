import { AwardInfo, GetAward, UserData } from "./common";

export type MergeMeta = {
    cost_chip: number,
    own_chip: number,
    is_strange: boolean,
    status: string,
};

export type MergeData = {
    user: UserData,
    meta: MergeMeta,
    output: GetAward,
    inputs: Array<AwardInfo>,
};
