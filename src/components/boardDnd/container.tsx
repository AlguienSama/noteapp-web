import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { DraggableNote } from "./DraggableNote"
import NoteService, { NoteDndProps } from '../../services/Note';
import { useEffect } from 'react';

type containerProps = {
    snapToGrid: boolean
}
export interface DragItem {
    id: string;
    type: string;
    left: number;
    top: number;
}
export const ItemTypes = {
    BOX: "box"
}

const styles: React.CSSProperties = {
    display: 'table',
    marginLeft: '1%',
    width: '97%',
    height: 'calc(100vh - 230px)',
    border: '1px solid black',
    position: 'relative',
};

export function doSnapToGrid(x:number, y:number): [number, number] {
    const snappedX = Math.round(x / 32) * 32
    const snappedY = Math.round(y / 32) * 32
    return [snappedX, snappedY]
}
export const Container = ({ snapToGrid }:containerProps) => {
    const [notesDnd, setDndNotes] = useState<NoteDndProps>({});
    
    useEffect(() => {
        const getNotes = async () => {
            const notes = await NoteService.getNotes();
            let noteObject: NoteDndProps = {};
            notes.forEach((n) => {
                const noteId = n.id || "";
                noteObject[noteId] ={note: n, top: 20, left: 20};
            });
            setDndNotes(noteObject);
        }
        getNotes();
    }, []);

    const moveNote = useCallback((id, left, top) => {
        setDndNotes(update(notesDnd, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [notesDnd]);
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };
            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            if (snapToGrid) {
                [left, top] = doSnapToGrid(left, top);
            }
            moveNote(item.id, left, top);
            return undefined;
        },
    }), [moveNote]);

    return (
        <div ref={drop} style={styles}>
			{Object.keys(notesDnd).map((i) => (
                <DraggableNote key={i} id={i} 
                left={notesDnd[i].left} top={notesDnd[i].top}
                note={notesDnd[i].note}/>
            ))}
		</div>
    );
};
