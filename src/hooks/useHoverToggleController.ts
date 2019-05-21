import { useRef, useState, MutableRefObject } from "react";
import useEventListener from "./useEventListener";

export default (delay: Number): [Boolean, MutableRefObject<any>] => {
    const [isHovering, setIsHovering] = useState<Boolean>(false);
    const ref = useRef<HTMLElement>(null);

    const handleMouseMove : EventListener = e => {
        const refContainsTarget : Boolean = ref.current.contains(e.target as Node);
        if (!isHovering && refContainsTarget) {
            setIsHovering(true);
        } else if (isHovering && !refContainsTarget) {
            setIsHovering(false);
        }
    };

    useEventListener(document.body, "mousemove", handleMouseMove, [
        isHovering,
        ref.current,
    ]);

    useEventListener(window, "mouseout", () => setIsHovering(false), [
        isHovering,
        ref.current,
    ]);

    return [isHovering, ref];
};