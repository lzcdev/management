import React, { lazy } from 'react'
import Home from '../views/Home'
const About = lazy(() => import('../views/About')) // 懒加载
// 重定向组件
import { Navigate } from 'react-router-dom'


// 懒加载模式需要我们添加一个Loading组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)


const routes = [
  {
    path: '/',
    element: <Navigate to='home'></Navigate>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: withLoadingComponent(<About />)
  }
]

export default routes