
import { Route, Routes } from 'react-router'
import './App.css'
import LoginForm from './component/LoginForm'
import SignInForm from './component/SignInForm'
import Layout from './component/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/signup' element={<SignInForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
