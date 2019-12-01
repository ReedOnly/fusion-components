import React from 'react';
import classNames from 'classnames';
import styles from '../styles.less';
import useElevationClassName from '../../useElevationClassName';

type PopoverPlacement = 'below' | 'above' | 'left' | 'right';
type PopoverJustification = 'start' | 'center' | 'end';

export type PopoverContainerProps = {
    placement?: PopoverPlacement;
    justify?: PopoverJustification;
    centered?: boolean;
    title?: string;
    fillWithContent?: boolean;
};

const Arrow = () => {
    return (
        <svg
            className={styles.arrow}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.79423 7.5L10.7152 7.5L10.2135 6.72765L7.15506 2.0188C6.56361 1.10821 5.23062 1.10821 4.63917 2.0188L1.58069 6.72765L1.07903 7.5L2 7.5L9.79423 7.5Z"
                fill="white"
                stroke="#E6E6E6"
            />
            <path
                d="M5.29289 3.70711C5.68342 3.31658 6.31658 3.31658 6.70711 3.70711L11 8L1 8L5.29289 3.70711Z"
                fill="white"
            />
        </svg>
    );
};

const PopoverContainer = React.forwardRef<
    HTMLDivElement | null,
    React.PropsWithChildren<PopoverContainerProps>
>(({ placement, justify, title, fillWithContent, centered, children }, ref) => {
    const containerClassNames = classNames(
        styles.popoverContainer,
        useElevationClassName(1),
        placement ? styles[placement] : null,
        justify ? styles[justify] : null,
        {
            [styles.fillWithContent]: fillWithContent,
            [styles.isCentered]: centered,
        }
    );

    return (
        <div className={containerClassNames} ref={ref as React.Ref<HTMLDivElement>}>
            <Arrow />
            {title && <h5>{title}</h5>}
            <div className={styles.content}>{children}</div>
        </div>
    );
});

export default PopoverContainer;
