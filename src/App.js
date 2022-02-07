// Hooks
import { useRef } from 'react';

// Custom Hooks
import { useCount } from "./hooks/useCount";
import { useToggle } from "./hooks/useToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";

// Components
import { ButtonMemoized } from "./components/ButtonMemoized";


export const App = () => {

  // Hooks
  const ref = useRef()

  // Custom Hooks
  const [clicks, noMemoizedClick, memoizedClick] = useCount(0);
  const [toggle, setToggle] = useToggle();
  const [text, setText] = useLocalStorage('inputText', '');
  const [modalOpen, setModalOpen] = useToggle();

  return (
    <div>
      <div>
        <h1>useCallback and Memoized Component</h1>
        <p>{clicks}</p>
        <ButtonMemoized onClick={noMemoizedClick} name={'Button1'} />
        <ButtonMemoized onClick={memoizedClick} name={'Button2'} />
      </div>
      <div>
        <h1>useToggle and useReducer Example</h1>
        <button onClick={setToggle} >
          Turn {toggle ? 'On' : 'Off'}
        </button>
      </div>
      <div>
        <h1>useLocalStorage</h1>
        <input type="text" value={text} onChange={(evt) => setText(evt.target.value)} />
      </div>
      <div>
        <h1>useRef & Modal Test</h1>
        <button onClick={setModalOpen}>Toggle modal</button>
        {modalOpen ? (
          <div ref={ref} style={{ background: '#ececec' }}>
            <p>Modal test</p>
            <p>Modal test</p>
            <p>Modal test</p>
          </div>
        ) : <p>No hay modal</p>
        }
      </div>
    </div>
  );
}
