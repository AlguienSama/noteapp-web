import React, { memo } from "react";
import { NoteProps } from "../../services/Note";
// eslint-disable-next-line
import { Note } from "../note/layout";
import { NotePreview } from './../note/NotePreview';

type NoteMemoProps = {
    note: NoteProps,
    preview?: boolean
}

export const NoteBoard = memo(function NoteBoard({note, preview}: NoteMemoProps) {
    return (
        <div style={{ cursor: 'move' }} role={preview ? 'BoxPreview' : 'Box'}>
            <div className="move-note" style={{
                height: '40px',
                width: '152px',
                top: 0,
                left: 0,
                position: "absolute"
            }} />
			<NotePreview note={note} />
		</div>
    );
});