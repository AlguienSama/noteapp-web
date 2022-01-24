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

class NoteService {

    static setNotesLocalStorage = async (notes: NoteProps[]) => {
        let savedNotes = localStorage.getItem("notes");
        
        if (savedNotes === null && notes !== undefined) {
            savedNotes = JSON.stringify(notes);
        } else if (savedNotes !== null && notes !== undefined) {
            let objectNotes = JSON.parse(savedNotes);
            CONTINUE: for (const note of notes) {
                for (const sNote of objectNotes) {
                    if (note === sNote) {
                        continue CONTINUE;
                    }
                }
                objectNotes.push(note);
            }
            savedNotes = JSON.stringify(objectNotes);
        }

        console.log(savedNotes);
    }

}

export default NoteService;