import React from "react";
import { NoteProps } from '../../services/Note';

type DefaultNoteProps = {
    note: NoteProps
}
export function NotePreview({note}: DefaultNoteProps) {

    return (
        <div style={{backgroundColor: note.color || '#a0aeb6'}} className="note-form">
            <div className="note-head">
                <div className="align-left">
                    <span className='small'>{note.created_at.toLocaleString()}</span><br />
                    <span className='small'>{note.last_at.toLocaleString()}</span>
                </div>
            </div>
            <div className='note-content'>
                <p>{note.title}</p>
                <span className='small'>{note.remind}</span>
                <p className="small">{note.content}</p>
            </div>
        </div>
    )
}