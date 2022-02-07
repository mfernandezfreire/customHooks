import { useEffect } from "react";

export const useOnClickOutSide = (ref, handler) => {
    useEffect(() => {
        const listener = (evt) => {

            //When de component didMount checks
            if (!ref.current || ref.current.contains(evt.target)) {
                return;
            }

            handler(evt);
        };

        // Unmount
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);

}