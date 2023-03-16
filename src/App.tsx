import { useState } from 'react'
import Comp1 from '@/components/Comp1/index'
import Comp2 from '@/components/Comp2/index'

// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}

export default App
