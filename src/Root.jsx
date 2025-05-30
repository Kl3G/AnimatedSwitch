
import { useState } from 'react';
import App from './App';

export default function Root() {
    
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'App 제거' : 'App 생성'}
      </button>
      {show && <App />}
    </>
  );
}