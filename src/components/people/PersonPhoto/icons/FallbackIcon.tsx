import React from 'react';
import { IconProps, useIcon } from '@equinor/fusion-components';

const FallbackIcon = (props: IconProps) => {
    const iconFactory = useIcon(
        <>
            <circle cx="28" cy="28" r="28" fill="#EAEAEA" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.0001 14.6666C24.3167 14.6666 21.3334 17.65 21.3334 21.3333C21.3334 25.0166 24.3167 28 28.0001 28C31.6834 28 34.6667 25.0166 34.6667 21.3333C34.6667 17.65 31.6834 14.6666 28.0001 14.6666ZM31.3334 21.3333C31.3334 19.5 29.8334 18 28.0001 18C26.1667 18 24.6667 19.5 24.6667 21.3333C24.6667 23.1666 26.1667 24.6666 28.0001 24.6666C29.8334 24.6666 31.3334 23.1666 31.3334 21.3333ZM38.0001 38C37.6667 36.8166 32.5001 34.6666 28.0001 34.6666C23.5167 34.6666 18.3834 36.8 18.0001 38H38.0001ZM14.6667 38C14.6667 33.5666 23.5501 31.3333 28.0001 31.3333C32.4501 31.3333 41.3334 33.5666 41.3334 38V41.3333H14.6667V38Z"
                fill="#666666"
            />
        </>
    );

    return iconFactory(props);
};

export default FallbackIcon;
