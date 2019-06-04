import * as React from 'react';

import useIcon, { IconProps } from '../../../../hooks/useIcon';

type ArrowIconProps = {
    direction: 'up' | 'down' | 'back' | 'forward' | 'ios-back' | 'ios-forward';
} & IconProps;

const ArrowIcon = ({ direction, ...rest }: ArrowIconProps) => {
    let d: string;
    switch (direction) {
        case 'up':
            d =
                'M13 18.7912V7.62123L17.88 12.5012C18.27 12.8912 18.91 12.8912 19.3 12.5012C19.69 12.1112 19.69 11.4812 19.3 11.0912L12.71 4.50123C12.5231 4.31397 12.2695 4.20874 12.005 4.20874C11.7405 4.20874 11.4868 4.31397 11.3 4.50123L4.69997 11.0812C4.30997 11.4712 4.30997 12.1012 4.69997 12.4912C5.08997 12.8812 5.71997 12.8812 6.10997 12.4912L11 7.62123V18.7912C11 19.3412 11.45 19.7912 12 19.7912C12.55 19.7912 13 19.3412 13 18.7912Z';
            break;
        case 'down':
            d =
                'M11.005 5.20874V16.3787L6.12498 11.4987C5.73498 11.1087 5.09498 11.1087 4.70498 11.4987C4.31498 11.8887 4.31498 12.5187 4.70498 12.9087L11.295 19.4987C11.685 19.8887 12.315 19.8887 12.705 19.4987L19.295 12.9087C19.685 12.5187 19.685 11.8887 19.295 11.4987C19.1081 11.3115 18.8545 11.2063 18.59 11.2063C18.3255 11.2063 18.0718 11.3115 17.885 11.4987L13.005 16.3787V5.20874C13.005 4.65874 12.555 4.20874 12.005 4.20874C11.455 4.20874 11.005 4.65874 11.005 5.20874Z';
            break;
        case 'back':
            d =
                'M18.7912 11.005H7.62124L12.5012 6.12502C12.8912 5.73502 12.8912 5.09502 12.5012 4.70502C12.3144 4.51777 12.0608 4.41254 11.7962 4.41254C11.5317 4.41254 11.2781 4.51777 11.0912 4.70502L4.50124 11.295C4.11124 11.685 4.11124 12.315 4.50124 12.705L11.0912 19.295C11.4812 19.685 12.1112 19.685 12.5012 19.295C12.8912 18.905 12.8912 18.275 12.5012 17.885L7.62124 13.005H18.7912C19.3412 13.005 19.7912 12.555 19.7912 12.005C19.7912 11.455 19.3412 11.005 18.7912 11.005Z';
            break;
        case 'forward':
            d =
                'M5.20874 13H16.3787L11.4987 17.88C11.1087 18.27 11.1087 18.91 11.4987 19.3C11.8887 19.69 12.5187 19.69 12.9087 19.3L19.4987 12.71C19.8887 12.32 19.8887 11.69 19.4987 11.3L12.9187 4.70002C12.7319 4.51276 12.4783 4.40753 12.2137 4.40753C11.9492 4.40753 11.6956 4.51276 11.5087 4.70002C11.1187 5.09002 11.1187 5.72002 11.5087 6.11002L16.3787 11H5.20874C4.65874 11 4.20874 11.45 4.20874 12C4.20874 12.55 4.65874 13 5.20874 13Z';
            break;
        case 'ios-back':
            d =
                'M17.0019 2.98499C16.5119 2.49499 15.7219 2.49499 15.2319 2.98499L6.92189 11.295C6.53189 11.685 6.53189 12.315 6.92189 12.705L15.2319 21.015C15.7219 21.505 16.5119 21.505 17.0019 21.015C17.4919 20.525 17.4919 19.735 17.0019 19.245L9.76189 11.995L17.0119 4.74499C17.4919 4.26499 17.4919 3.46499 17.0019 2.98499Z';
            break;
        case 'ios-forward':
            d =
                'M6.99815 21.015C7.48815 21.505 8.27815 21.505 8.76815 21.015L17.0782 12.705C17.4682 12.315 17.4682 11.685 17.0782 11.295L8.76815 2.98499C8.27815 2.49499 7.48815 2.49499 6.99815 2.98499C6.50815 3.47499 6.50815 4.26499 6.99815 4.75499L14.2382 12.005L6.98815 19.255C6.50815 19.735 6.50815 20.535 6.99815 21.015Z';
            break;
        default:
            throw new Error(`Unknown direction ${direction} set on ArrowIcon`);
    }

    const iconFactory = useIcon(<path d={d} fill="currentColor" />);

    return iconFactory(rest);
};

export default ArrowIcon;
