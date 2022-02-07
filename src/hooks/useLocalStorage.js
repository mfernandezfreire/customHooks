import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoragedValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(key) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoragedValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {   
            console.log(error);
        }
    }
    
    return [storedValue, setValue];
}