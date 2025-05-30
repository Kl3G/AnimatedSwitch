import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 렌더링된 App.jsx 컴포넌트를 실제로 DOM에 그려 넣는 역할.
import App from './App.jsx'
import Root from './Root';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// main.jsx는
// index.html의 #root를 찾아서,
// App.jsx를 그 안에 그려주는 합체 지점이다.
// 따라서, main.jsx는 index.html에 전달해 주는 개념이 아니다.
