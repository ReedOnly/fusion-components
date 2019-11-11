import * as React from 'react';

import useIcon, { IconProps } from '../../../../hooks/useIcon';

const PlatformIcon = (props: IconProps) => {
    const iconFactory = useIcon(
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.1384 1.3419e-05C13.7885 0.00230458 13.4953 0.287423 13.4556 0.664111L12.3097 11.5361H8.55912V7.26062L9.38821 7.59446C9.71866 7.72751 10.0863 7.54597 10.2104 7.18855C10.3351 6.82917 10.1665 6.42837 9.83432 6.29465L8.55912 5.78122V3.96373C8.55912 3.62622 8.30655 3.35259 7.99501 3.35259C7.68341 3.35259 7.43084 3.62622 7.43084 3.96373V5.32697L0.863278 2.68282C0.532783 2.54974 0.165248 2.73127 0.0411545 3.08873C-0.0836358 3.4481 0.0849603 3.84887 0.4172 3.98262L7.43084 6.8064V11.5361H5.10552C4.54895 11.5361 4.09778 12.0247 4.09778 12.6277V18.086C4.09778 18.6889 4.54895 19.1776 5.10552 19.1776H6.40004V23.386C6.40004 23.725 6.65381 24 6.96684 24C7.27993 24 7.5337 23.725 7.5337 23.386V19.1776H11.2V23.386C11.2 23.725 11.4538 24 11.7668 24C12.0799 24 12.3337 23.725 12.3337 23.386V19.1776H15.4666V23.386C15.4666 23.725 15.7204 24 16.0334 24C16.3465 24 16.6002 23.725 16.6002 23.386V19.1776H20.2666V23.386C20.2666 23.725 20.5204 24 20.8334 24C21.1465 24 21.4003 23.725 21.4003 23.386V19.1776H22.9923C23.5489 19.1776 24 18.6889 24 18.086V12.6277C24 12.0247 23.5489 11.5361 22.9923 11.5361H16.0846L14.8287 0.656111C14.7853 0.279611 14.4887 -0.00224018 14.1384 1.3419e-05ZM14.8515 11.5361L14.2007 5.04622L13.5508 11.5361H14.8515Z"
            fill="currentColor"
        />
    );

    return iconFactory(props);
};

export default PlatformIcon;
