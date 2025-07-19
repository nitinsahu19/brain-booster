
import { Route, Routes } from 'react-router'
import './App.css'
import LoginForm from './component/LoginForm'
import SignInForm from './component/SignInForm'
import Layout from './component/template/Layout'
import Quizze from './component/pages/Quizze'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/signup' element={<SignInForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/quizze' element={<Quizze/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
