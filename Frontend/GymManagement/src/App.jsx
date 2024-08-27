import { useState } from 'react'
import Login from './Components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
