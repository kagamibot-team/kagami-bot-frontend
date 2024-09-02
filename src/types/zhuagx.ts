export type UpdateContentData = {
    content: string,
    tags?: Array<string>,
}

export type VersionData = {
    version: string,
    time?: string,
    updates: Array<UpdateContentData>,
}

export type UpdateData = {
    current_page: number,
    max_page: number,
    show_pager: boolean,
    versions: Array<VersionData>,
};