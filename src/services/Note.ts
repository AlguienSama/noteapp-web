import axios from 'axios';

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
    [key: string]: {
        note: NoteProps,
        top: number,
        left: number
    }
}

class NoteService {

    static getNotes = async (): Promise<NoteProps[]> => {
        try {
            const res = await axios.get('/note/');
            if (res.status === 200) {
                return res.data.notes;
            }
        } catch (e) {
            return [];
        }
        return [];
    }

    static setNotesLocalStorage = async (notes: NoteProps[]) => {
        let savedNotes = localStorage.getItem("notes");
        
        if (savedNotes === null && notes !== undefined) {
            savedNotes = JSON.stringify(notes);

        } else if (savedNotes !== null && notes !== undefined) {
            let objectNotes = JSON.parse(savedNotes);
            CONTINUE: for (const note of notes) {
                for (const sNote of objectNotes) {
                    if (note === sNote) { continue CONTINUE; }
                }
                objectNotes.push(note);
            }
            savedNotes = JSON.stringify(objectNotes);
        }

        return savedNotes;
    }

    static setNoteLocalStorage = async (note: NoteProps) => {
        let savedNotes = localStorage.getItem("notes");
        
        if (savedNotes === null) {
            savedNotes = JSON.stringify([note]);

        } else {
            let objectNotes = JSON.parse(savedNotes);
            for (const sNote of objectNotes) {
                if (sNote === note) { return; }
            }
            objectNotes.push(note);
            savedNotes = JSON.stringify(objectNotes);
        }

        return savedNotes;
    }

}

export default NoteService;