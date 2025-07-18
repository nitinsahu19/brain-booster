import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuizzPage from './Components/QuizzPage'

const App = () => {
  return (
    <>
    <Routes >
      <Route  path='/quiz' element={<QuizzPage/>} />
    </Routes>

    
    </>
  )
}

export default App
