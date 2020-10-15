import * as React from 'react';
import * as PIXI from 'pixi.js';

const usePixiApp = (
    canvas: React.RefObject<HTMLCanvasElement> | null,
    container: React.RefObject<HTMLDivElement> | null,
    backgroundColor: number
) => {
    PIXI.utils.skipHello(); // Don't output the pixi message to the console
    PIXI.Ticker.shared.autoStart = false;
    PIXI.settings.ROUND_PIXELS = true;

    const pixiApp = React.useRef<PIXI.Application | null>(null);

    pixiApp.current = React.useMemo(() => {
        if (!canvas?.current || !container?.current) return null;

        return new PIXI.Application({
            view: canvas.current,
            width: container.current?.offsetWidth,
            height: container.current?.offsetHeight,
            backgroundColor,
            resolution: 1,
            antialias: true,
            transparent: true,
            sharedTicker: true,
        });
    }, [canvas?.current, container?.current, backgroundColor]);

    return { pixiApp };
};

export default usePixiApp;
