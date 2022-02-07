import { memo } from 'react';

const AppButton = ({onClick, name}) => {
    console.log('BUTTON', name);
    return (<button onClick={onClick} />)
}

export const ButtonMemoized = memo(AppButton);
