import './App.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Subject from './Pages/Subjects/Page'
import Leaderboard from './Pages/Leaderboard/Leaderboard'
import Blog from './Pages/Blog/Blog'
import MyProgress from './Pages/MyProgress/Page'
import Quizees from './Pages/Quizees/Page'
import SignUpLogin from './Pages/CreatePage'
import Home from './Pages/Home/Home'

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
