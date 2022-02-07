import { useReducer, useState } from "react";

export const useToggle = (initialValue = false) => {

    // Efficient way to do
    // Is used when the function use an previous state
    // It returns an array [ state, dispatcher]
    return useReducer((state) => !state, initialValue);

    // Simplest Way to do 
    // const [state, setState] = useState(initialValue);
    // const toggle = () => setState((prevState) => !prevState);
    // return [state, toggle];
}