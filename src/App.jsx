import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuComponent from './components/tree-view/MenuComponent'

import {menus} from './components/tree-view/data.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MenuComponent menus={menus} />
    </div>
  )
}

export default App
