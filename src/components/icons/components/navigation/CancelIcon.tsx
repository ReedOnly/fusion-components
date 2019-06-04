import * as React from 'react';

import useIcon, { IconProps } from '../../../../hooks/useIcon';

const CancelIcon = (props: IconProps) => {
    const iconFactory = useIcon(
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM14.89 16.3C15.28 16.69 15.91 16.69 16.3 16.3C16.68 15.91 16.68 15.27 16.3 14.89L13.41 12L16.3 9.11C16.69 8.72 16.69 8.09 16.3 7.7C15.91 7.31 15.28 7.31 14.89 7.7L12 10.59L9.11 7.7C8.72 7.31 8.09 7.31 7.7 7.7C7.51275 7.88683 7.40751 8.14048 7.40751 8.405C7.40751 8.66952 7.51275 8.92317 7.7 9.11L10.59 12L7.7 14.89C7.51275 15.0768 7.40751 15.3305 7.40751 15.595C7.40751 15.8595 7.51275 16.1132 7.7 16.3C8.09 16.69 8.72 16.69 9.11 16.3L12 13.41L14.89 16.3Z"
            fill="currentColor"
        />
    );

    return iconFactory(props);
};

export default CancelIcon;
