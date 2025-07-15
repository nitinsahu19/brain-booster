import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreatePage from './Pages/CreatePage'
import Navbar from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CreatePage />
    </>
  )
}

export default App
