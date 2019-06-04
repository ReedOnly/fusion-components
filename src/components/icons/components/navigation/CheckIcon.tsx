import * as React from 'react';

import useIcon, { IconProps } from '../../../../hooks/useIcon';

const CheckIcon = (props: IconProps) => {
    const iconFactory = useIcon(
        <path
            d="M8.79506 15.875L5.32506 12.405C5.13823 12.2178 4.88458 12.1125 4.62006 12.1125C4.35554 12.1125 4.10189 12.2178 3.91506 12.405C3.52506 12.795 3.52506 13.425 3.91506 13.815L8.09506 17.995C8.48506 18.385 9.11506 18.385 9.50506 17.995L20.0851 7.41501C20.4751 7.02501 20.4751 6.39501 20.0851 6.00501C19.8982 5.81776 19.6446 5.71252 19.3801 5.71252C19.1155 5.71252 18.8619 5.81776 18.6751 6.00501L8.79506 15.875Z"
            fill="currentColor"
        />
    );

    return iconFactory(props);
};

export default CheckIcon;
