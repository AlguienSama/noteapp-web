export enum ViewFormat {
    PLAIN = "plain",
    HTML = "html",
    MD = "md"
}
export type NoteProps = {
    id: string | null,
    title: string,
    content: string,
    remind: Date | null,
    is_pinned: boolean,
    priority: number,
    color: string,
    view_format: ViewFormat
    created_at: Date | string,
    last_at: Date | string
}

export type NoteDndProps = {
    note: NoteProps,
    top: number,
    left: number
}