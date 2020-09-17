import * as React from 'react';
import * as PIXI from 'pixi.js';
import { useHangingGardenContext } from '../hooks/useHangingGardenContext';
import { getColumnX, getHeaderWidth, getMaxRowCount } from '../utils';
import useColumn from './useColumn';
import { HangingGardenColumnIndex, HangingGardenColumn } from '../models/HangingGarden';
import useHightLightedItem from './useHightLightedItem';

const useGarden = <T extends HangingGardenColumnIndex>() => {
    const {
        pixiApp,
        stage,
        container,
        columns,
        expandedColumns,
        itemWidth,
        setExpandedColumns,
        setMaxRowCount,
        highlightedColumnKey,
        highlightedItem,
        scroll: { scrollLeft, scrollTop, scrollToHighlightedColumn, scrollToHighlightedItem },
        textureCaches: { clearTextureCaches },
    } = useHangingGardenContext();

    const { renderColumn } = useColumn<T>();
    const { renderHighlightedItem } = useHightLightedItem();

    React.useEffect(() => {
        clearTextureCaches();
        setExpandedColumns({});
        setMaxRowCount(getMaxRowCount(columns as HangingGardenColumn<T>[]));
        scrollToHighlightedColumn(
            columns as HangingGardenColumn<T>[],
            highlightedColumnKey as string,
            itemWidth
        );
        renderGarden();
    }, [columns]);

    React.useEffect(() => {
        clearTextureCaches();
        renderGarden();
    }, [expandedColumns]);

    React.useEffect(() => {
        scrollToHighlightedItem(columns as HangingGardenColumn<T>[], highlightedItem, itemWidth);
        clearTextureCaches();
        renderGarden();
    }, [highlightedItem]);

    const renderGarden = React.useCallback(() => {
        const oldStage = stage.current;
        stage.current = new PIXI.Container();
        stage.current.x = -scrollLeft.current;
        stage.current.y = -scrollTop.current;

        const offsetWidth = container.current?.offsetWidth || 0;
        const scrollRight = scrollLeft.current + offsetWidth + 10;
        for (let i = 0; i < (columns as HangingGardenColumn<T>[]).length; i++) {
            const column = columns[i];
            const columnX = getColumnX(i, expandedColumns, itemWidth);
            const width = getHeaderWidth(column.key, expandedColumns, itemWidth);

            if (column && columnX + width >= scrollLeft.current && columnX <= scrollRight) {
                renderColumn(column, i);
            }
        }

        renderHighlightedItem();

        pixiApp?.stage.addChild(stage.current);

        oldStage.destroy();
        pixiApp?.stage.removeChild(oldStage);

        pixiApp?.render();
    }, [
        container.current?.offsetWidth,
        stage.current,
        pixiApp,
        scrollLeft.current,
        scrollTop.current,
        expandedColumns,
        columns,
        renderColumn,
        getColumnX,
        getHeaderWidth,
        renderHighlightedItem,
    ]);

    return { renderGarden };
};

export default useGarden;
