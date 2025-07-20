
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './component/template/Layout'
import Quizze from './component/pages/Quizze'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/quizze' element={<Quizze/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
