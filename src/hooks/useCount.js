import { useState, useCallback } from "react";

export const useCount = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const noMemoizedClick = () => {
        setCount(count + 1);
    }

    const memoizedClick = useCallback(() => {
      setCount((prevState) => prevState + 1);
    }, [setCount]);
    

    return [count, noMemoizedClick, memoizedClick];
}