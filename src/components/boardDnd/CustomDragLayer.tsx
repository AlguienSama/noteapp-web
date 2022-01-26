import { useDragLayer } from 'react-dnd';
import { ItemTypes } from './container';
import { BoxDragPreview } from './BoxDragPreview';
import { doSnapToGrid as snapToGrid } from './container';
import { XYCoord } from 'react-dnd';

const layerStyles: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    textAlign: 'left',
    height: '100%',
};

function getItemStyles(initialOffset: XYCoord, currentOffset: XYCoord, isSnapToGrid: boolean) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let { x, y } = currentOffset;
    if (isSnapToGrid) {
        x -= initialOffset.x;
        y -= initialOffset.y;
        [x, y] = snapToGrid(x, y);
        x += initialOffset.x;
        y += initialOffset.y;
    }
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}

type CustomDragLayerProps = {
    snapToGrid: boolean
}
export const CustomDragLayer = ({snapToGrid}: CustomDragLayerProps) => {
    const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));
    function renderItem() {
        switch (itemType) {
            case ItemTypes.BOX:
                return <BoxDragPreview note={item.note}/>;
            default:
                return null;
        }
    }
    if (!isDragging || !initialOffset || !currentOffset) {
        return null;
    }
    return (<div style={layerStyles}>
			<div style={getItemStyles(initialOffset, currentOffset, snapToGrid)}>
				{renderItem()}
			</div>
		</div>);
};
