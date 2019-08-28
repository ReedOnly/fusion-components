import React, { useEffect, useContext, useMemo, useCallback } from 'react';

import Card from './Card';
import { OrgChartContext, OrgChartContextReducer } from '../store';
import { OrgNode } from '../orgChartTypes';

function Children<T>() {
    const {
        state: {
            allNodes,
            childrenRows,
            asideRows,
            rowMargin,
            cardMargin,
            cardWidth,
            centerX,
            numberOfCardsPerRow,
        },
        dispatch,
    } = useContext<OrgChartContextReducer<T>>(OrgChartContext);

    const childrenNodes = useMemo(() => allNodes.filter(d => !d.aside && d.parentId), [allNodes]);

    const rows = useMemo(
        () =>
            childrenNodes.reduce(
                (
                    prevValue: OrgNode<T>[][],
                    currentValue: OrgNode<T>,
                    currentIndex: number
                ): OrgNode<T>[][] => {
                    if (numberOfCardsPerRow) {
                        const index = Math.floor(currentIndex / numberOfCardsPerRow);
                        if (!prevValue[index]) {
                            prevValue[index] = [];
                        }
                        prevValue[index].push(currentValue);
                    }
                    return prevValue;
                },
                [] as OrgNode<T>[][]
            ),
        [childrenNodes, numberOfCardsPerRow]
    );

    const initialMargin = rowMargin * asideRows + (numberOfCardsPerRow === 1 ? 50 : 60);

    useEffect(() => {
        if (rows.length !== childrenRows) {
            dispatch({
                type: 'UPDATE_CHILDREN_ROWS',
                rows: rows.length,
            });
        }
    }, [childrenRows, rows]);

    const getStartXPosition = (cards: OrgNode<T>[], rowNo: number) => {
        if (numberOfCardsPerRow === 1) {
            return cardWidth / 2 + 10;
        }
        const totalWidth = cards.length * cardWidth + (cards.length - 1) * cardMargin;
        const totalWidthFirstRow = rows[0].length * cardWidth + (rows[0].length - 1) * cardMargin;
        return rowNo >= 1 ? centerX - totalWidthFirstRow / 2 : centerX - totalWidth / 2;
    };

    const renderRow = useCallback(
        (cards: OrgNode<T>[], rowNo: number) => {

            const startX = getStartXPosition(cards, rowNo);

            return cards.map((card, i) => (
                <React.Fragment key={card.id}>
                    <Card
                        node={card}
                        x={startX + i * (cardWidth + cardMargin)}
                        y={initialMargin + (rowNo + 1) * rowMargin}
                    />
                </React.Fragment>
            ));
        },
        [centerX, cardWidth, cardMargin, rowMargin, initialMargin, rows]
    );

    return (
        <g className="children">
            {rows.map((cards, rowNo) => (
                <React.Fragment key={rowNo}>{renderRow(cards, rowNo)}</React.Fragment>
            ))}
        </g>
    );
}

export default Children;
