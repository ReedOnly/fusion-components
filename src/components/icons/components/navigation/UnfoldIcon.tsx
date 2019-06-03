import * as React from 'react';

import useIcon, { IconProps } from '../../../../hooks/useIcon';

type UnfoldIconProps = {
    less: boolean;
} & IconProps;

const UnfoldIcon = ({ less, ...rest }: UnfoldIconProps) => {
    const d = less
        ? 'M15.175 4.40753C15.4395 4.40753 15.6932 4.51276 15.88 4.70002C16.27 5.09002 16.27 5.73002 15.87 6.12002L12.7 9.29002C12.31 9.68002 11.68 9.68002 11.29 9.29002L8.12001 6.12002C7.73001 5.73002 7.73001 5.09002 8.12001 4.70002C8.30685 4.51276 8.5605 4.40753 8.82501 4.40753C9.08953 4.40753 9.34318 4.51276 9.53001 4.70002L12 7.17002L14.47 4.70002C14.6568 4.51276 14.9105 4.40753 15.175 4.40753ZM12 16.83L9.53001 19.3C9.14001 19.69 8.51001 19.69 8.12001 19.3C7.73001 18.91 7.73001 18.27 8.13001 17.89L11.3 14.72C11.4868 14.5328 11.7405 14.4275 12.005 14.4275C12.2695 14.4275 12.5232 14.5328 12.71 14.72L15.88 17.89C16.27 18.28 16.27 18.91 15.88 19.3C15.49 19.69 14.86 19.69 14.47 19.3L12 16.83Z'
        : 'M14.46 8.28999L12 5.82999L9.53001 8.28999C9.14001 8.67999 8.51001 8.67999 8.12001 8.28999C7.73001 7.89999 7.73001 7.26999 8.12001 6.87999L11.29 3.69999C11.4768 3.51273 11.7305 3.4075 11.995 3.4075C12.2595 3.4075 12.5132 3.51273 12.7 3.69999L15.87 6.87999C16.26 7.26999 16.26 7.89999 15.87 8.28999C15.48 8.67999 14.85 8.67999 14.46 8.28999ZM9.54001 15.71L12 18.17L14.47 15.72C14.6568 15.5327 14.9105 15.4275 15.175 15.4275C15.4395 15.4275 15.6932 15.5327 15.88 15.72C16.27 16.11 16.27 16.74 15.88 17.13L12.71 20.3C12.32 20.69 11.69 20.69 11.3 20.3L8.13001 17.12C7.74001 16.73 7.74001 16.1 8.13001 15.71C8.31685 15.5227 8.5705 15.4175 8.83501 15.4175C9.09953 15.4175 9.35318 15.5227 9.54001 15.71Z';
    const iconFactory = useIcon(
        <path fillRule="evenodd" clipRule="evenodd" d={d} fill="currentColor" />
    );

    return iconFactory(rest);
};

export default UnfoldIcon;
