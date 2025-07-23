
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './component/template/Layout'
import Quizze from './component/pages/Quizze'
import DefaultPage from './component/pages/DefaultPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='*' element={<DefaultPage/>}/>
      <Route path='/' element={<Layout/>}>
        <Route path='/quizze' element={<Quizze/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
