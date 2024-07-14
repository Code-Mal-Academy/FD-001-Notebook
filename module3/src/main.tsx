import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ChapterFour from './routes/ChapterFour'
import ChapterFive from './routes/ChapterFive'
import ChapterSix from './routes/ChapterSix'
import ChapterEight from './routes/ChapterEight'
import ChapterNine from './routes/ChapterNine'
import ChapterTen from './routes/ChapterTen'
import ChapterEleven from './routes/ChapterEleven'
import ChapterTwelve from './routes/ChapterTwelve'
import ChapterOne from './routes/ChapterOne'
import Setup from './routes/Setup'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Setup />
  },
  {
    path: "/chapter-1",
    element: <ChapterOne />
  },
  {
    path: "/chapter-4",
    element: <ChapterFour />
  }, {
    path: "/chapter-5",
    element: <ChapterFive />
  }, {
    path: "/chapter-6",
    element: <ChapterSix />
  }, {
    path: "/chapter-8",
    element: <ChapterEight />
  },
  {
    path: "/chapter-9",
    element: <ChapterNine />
  },
  {
    path: "/chapter-10",
    element: <ChapterTen />
  },
  {
    path: "/chapter-11",
    element: <ChapterEleven />
  }, {
    path: "/chapter-12",
    element: <ChapterTwelve />


  }






])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
