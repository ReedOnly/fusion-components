import * as React from 'react';
import * as PIXI from 'pixi.js';
import { useHangingGardenContext } from '../hooks/useHangingGardenContext';
import { HIGHLIGHTED_ITEM_KEY } from '../utils';
import { HangingGardenColumn, HangingGardenColumnIndex } from '../models/HangingGarden';
import useRenderItem from './useItem';

const useHightLightedItem = <T extends HangingGardenColumnIndex>() => {
    const {
        columns,
        itemKeyProp,
        stage,
        highlightedItem,
        textureCaches: { getTextureFromCache, addTextureToCache },
    } = useHangingGardenContext();

    const { renderItem } = useRenderItem();

    const renderHighlightedItem = React.useCallback(() => {
        if (!highlightedItem) {
            const renderedHighlightedItem = getTextureFromCache(
                'items',
                HIGHLIGHTED_ITEM_KEY
            ) as PIXI.Container;

            if (renderedHighlightedItem) {
                stage.current.removeChild(renderedHighlightedItem);
            }

            return;
        }

        const column = (columns as HangingGardenColumn<T>[]).find((column) =>
            column.data.find(
                (item: T) =>
                    item[itemKeyProp as keyof T] === (highlightedItem as T)[itemKeyProp as keyof T]
            )
        );

        if (column) {
            renderItem(
                highlightedItem as T,
                column.data.findIndex(
                    (item) =>
                        item[itemKeyProp as keyof T] ===
                        (highlightedItem as T)[itemKeyProp as keyof T]
                ),
                (columns as T).indexOf(column)
            );
        }
    }, [highlightedItem, getTextureFromCache, addTextureToCache, stage.current, columns]);

    return { renderHighlightedItem };
};

export default useHightLightedItem;
