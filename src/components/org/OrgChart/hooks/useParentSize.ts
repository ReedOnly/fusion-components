import { useState } from 'react';

type Size = {
    height: number;
    width: number;
};

export default (ref?: React.MutableRefObject<SVGElement | null>): Size => {
    const [resize, setResize] = useState({ fromWidth: 0, toWidth: 0, fromHeight: 0, toHeight: 0 });

    const checkResize = () => {
        if (!(ref && ref.current && ref.current.parentElement)) {
            return;
        }

        const width = ref.current.parentElement.offsetWidth;
        const height = ref.current.parentElement.offsetHeight;
        const didResize = width !== resize.toWidth || height !== resize.toHeight;

        if (didResize) {
            setResize({
                fromWidth: resize.toWidth,
                toWidth: width,
                fromHeight: resize.fromHeight,
                toHeight: height,
            });
        } else {
            window.requestAnimationFrame(checkResize);
        }
    };
    checkResize();

    return {
        height: resize.toHeight,
        width: resize.toWidth,
    };
};
