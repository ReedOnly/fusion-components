import React, { ReactNode, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { FusionContext, useFusionContext } from '@equinor/fusion';
import { useOverlayContainer } from 'index';

export default (isVisible: Boolean, content: ReactNode): void => {
    const fusionContext = useFusionContext();
    const ref = useRef(document.createElement('div'));
    const overlayContainer = useOverlayContainer();

    useEffect(() => {
        if (!isVisible || !overlayContainer) {
            return;
        }

        render(
            <Router history={fusionContext.history}>
                <FusionContext.Provider value={fusionContext}>{content}</FusionContext.Provider>
            </Router>,
            ref.current
        );
        overlayContainer.prepend(ref.current);

        return () => {
            overlayContainer.removeChild(ref.current);
        };
    }, [isVisible, content]);
};
