import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Setup from './routes/Setup';
import ToDoList from './routes/ToDoList';
import ChapterTwo from './routes/ChapterTwo';
import ChapterThree from './routes/ChaperThree';
import ChapterFour from './routes/ChapterFour';
import ChapterFive from './routes/ChapterFive';
import ChapterSix from './routes/ChapterSix';
import ChapterSeven from './routes/ChapterSeven';
import ChapterEight from './routes/ChapterEight';
import ChapterNine from './routes/ChapterNine';
import ChapterTen from './routes/ChapterTen';
import ChapterEleven from './routes/ChapterEleven';
import ChapterThirteen from './routes/ChapterThirteen';
import ChapterFourteen from './routes/ChapterFourteen';
import ChapterFifteen from './routes/ChapterFifteen';
import ChapterSixteen from './routes/ChapterSixteen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Setup />
  },
  {
    path: "/chapter-2",
    element: <ChapterTwo />,
  },
  {
    path: "/chapter-3",
    element: <ChapterThree />,
  },
  {
    path: "/chapter-4",
    element: <ChapterFour />,
  },

  {
    path: "/chapter-5",
    element: <ChapterFive />,
  },
  {
    path: "/chapter-6",
    element: <ChapterSix />,
  },
  {
    path: "/chapter-7",
    element: <ChapterSeven />,
  },
  {
    path: "/chapter-8",
    element: <ChapterEight />,
  },
  {
    path: "/chapter-9",
    element: <ChapterNine />,
  },
  {
    path: "/chapter-10",
    element: <ChapterTen />,
  },
  {
    path: "/chapter-11",
    element: <ChapterEleven />,
  },
  {
    path: "/chapter-13",
    element: <ChapterThirteen />,
  },
  {
    path: "/chapter-14",
    element: <ChapterFourteen />,
  },
  {
    path: "/chapter-15",
    element: <ChapterFifteen />,
  },
  {
    path: "/chapter-16",
    element: <ChapterSixteen />,
  },
  {
    path: "/todo",
    element: <ToDoList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
