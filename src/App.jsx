import './App.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Subject from './Components/Subjects/Page'
import Leaderboard from './Components/Leaderboard/Leaderboard'
import Blog from './Components/Blog/Blog'
import MyProgress from './Components/MyProgress/Page'
import Quizees from './Components/Quizees/Page'
import SignUpLogin from './Pages/CreatePage'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'all-subject',
        element: <Subject />
      },
      {
        path: 'quizees',
        element: <Quizees />
      },
      {
        path: 'leaderboard',
        element: <Leaderboard />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'myprogress',
        element: <MyProgress />
      },
      {
        path:'login',
        element:<SignUpLogin />
      }
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
