import React, {memo, useEffect} from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Note } from "./Note";
import { ItemTypes } from "./container";
import { NoteProps } from "../../services/Note";

function getStyles(left: number, top: number, isDragging: boolean): React.CSSProperties {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    };
}

type DraggableNoteProps = {
    id: string | null,
    left: number,
    top: number,
    note: NoteProps
}

export const DraggableNote = memo(function Draggable(props: DraggableNoteProps) {
    const { id, left, top, note } = props;
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id, left, top, note },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top, note]);
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line
        <div ref={drag} style={getStyles(left, top, isDragging)} role="DraggableBox">
			<Note note={note} />
		</div>
    );
});