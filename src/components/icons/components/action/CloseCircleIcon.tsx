import * as React from 'react';

import useIcon, { IconProps } from '../../../../hooks/useIcon';

const CloseCircle = (props: IconProps) => {
    const iconFactory = useIcon(
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-9.41L15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59z"
            fill="currentColor"
        />
    );

    return iconFactory(props);
};

export default CloseCircle;
