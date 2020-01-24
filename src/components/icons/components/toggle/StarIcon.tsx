import * as React from 'react';
import { IconProps, useIcon } from '@equinor/fusion-components';

type LockIconProps = {
    outline: boolean;
} & IconProps;

const LockIcon = ({ outline, ...rest }: LockIconProps) => {
    const d = outline
        ? 'M14.8085 8.87458L19.6485 9.29458C20.5285 9.36458 20.8785 10.4646 20.2085 11.0446L16.5385 14.2246L17.6385 18.9546C17.8385 19.8146 16.9085 20.4946 16.1485 20.0346L11.9985 17.5246L7.84849 20.0246C7.08849 20.4846 6.15849 19.8046 6.35849 18.9446L7.45849 14.2246L3.78849 11.0446C3.11849 10.4646 3.47849 9.36458 4.35849 9.29458L9.18849 8.88458L11.0785 4.42458C11.4185 3.61458 12.5785 3.61458 12.9185 4.42458L14.8085 8.87458ZM8.23849 17.9246L11.9985 15.6546L15.7685 17.9346L14.7685 13.6546L18.0885 10.7746L13.7085 10.3946L11.9985 6.35458L10.2985 10.3846L5.91849 10.7646L9.23849 13.6446L8.23849 17.9246Z'
        : 'M12 17.5196L16.15 20.0296C16.91 20.4896 17.84 19.8096 17.64 18.9496L16.54 14.2296L20.21 11.0496C20.88 10.4696 20.5199 9.36958 19.6399 9.29958L14.81 8.88958L12.92 4.42958C12.58 3.61958 11.42 3.61958 11.08 4.42958L9.18995 8.87958L4.35995 9.28958C3.47995 9.35958 3.11995 10.4596 3.78995 11.0396L7.45995 14.2196L6.35995 18.9396C6.15995 19.7996 7.08995 20.4796 7.84995 20.0196L12 17.5196Z';
    const iconFactory = useIcon(
        <path fillRule="evenodd" clipRule="evenodd" d={d} fill="currentColor" />
    );

    return iconFactory(rest);
};

export default LockIcon;