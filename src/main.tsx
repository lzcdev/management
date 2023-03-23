import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化
// import 'reset-css'
import '@/assets/styles/global.scss'
import 'antd/dist/reset.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
