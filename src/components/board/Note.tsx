import React, { memo } from "react";
import { NoteProps } from "../../services/Note";

const styles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
}

type NoteMemoProps = {
    note: NoteProps,
    preview?: boolean
}

export const Note = memo(function Note({note, preview}: NoteMemoProps) {
    return (
        <div style={{ ...styles }} role={preview ? 'BoxPreview' : 'Box'}>
			{note.content}
            {console.log('note')}
            {console.log(note)}
		</div>
    );
});