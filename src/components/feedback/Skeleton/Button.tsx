import React from 'react';
import SkeletonBar from './Bar';
import { Button, ButtonProps } from '@equinor/fusion-components';

type SkeletonButtonProps = ButtonProps & {
    width?: number | string;
};

const SkeletonButton: React.FC<SkeletonButtonProps> = ({ width, ...buttonProps }) => {
    return <Button disabled {...buttonProps}><SkeletonBar width={width} /></Button>
};

export default SkeletonButton;