import React, { useEffect, useState } from "react";
import NoteService, { NoteProps } from "../services/Note";
import { NotePreview } from './note/NotePreview';

export function NoteList () {
    const [notes, setNotes] = useState<NoteProps[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            setNotes(await NoteService.getNotes());
        }
        fetchNotes();
    })

    return (
    <div className="container">
        {notes.map(n => {
            return (<NotePreview note={n} />)
        })}
    </div>
    )
}