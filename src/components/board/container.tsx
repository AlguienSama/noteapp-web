import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { DraggableNote } from "./DraggableNote"
import { NoteDndProps } from '../../services/Note';

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
    height: 300,
    border: '1px solid black',
    position: 'relative',
};

export function doSnapToGrid(x:number, y:number): [number, number] {
    const snappedX = Math.round(x / 32) * 32
    const snappedY = Math.round(y / 32) * 32
    return [snappedX, snappedY]
}
export const Container = ({ snapToGrid }:containerProps) => {
    const [notes, setBoxes] = useState<NoteDndProps[]>();
    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(notes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [notes]);
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
                ;
                [left, top] = doSnapToGrid(left, top);
            }
            moveBox(item.id, left, top);
            return undefined;
        },
    }), [moveBox]);

    return (
        <div ref={drop} style={styles}>
			{notes?.map((n) => (
                <DraggableNote key={n.note.id} id={n.note.id} {...n}/>
            ))}
		</div>
    );
};
