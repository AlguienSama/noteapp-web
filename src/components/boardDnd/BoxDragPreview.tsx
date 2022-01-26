import { useEffect, useState, memo } from 'react';
import { NoteProps } from '../../services/Note';
import { NoteBoard } from './Note';
const styles = {
    display: 'inline-block',
};

type BoxDragPreviewProps = {
    note: NoteProps
}
export const BoxDragPreview = memo(function BoxDragPreview({note}: BoxDragPreviewProps) {
    const [tickTock, setTickTock] = useState(false);
    useEffect(function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500);
        return () => clearInterval(interval);
    }, [tickTock]);
    return (
        <div style={styles}>
			<NoteBoard note={note} preview/>
		</div>
    );
});
