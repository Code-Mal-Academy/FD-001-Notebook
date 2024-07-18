import { createBrowserRouter, defer } from "react-router-dom";
import ChapterFour from "../routes/ChapterFour";
import ChapterFive from "../routes/ChapterFive";
import ChapterSix from "../routes/ChapterSix";
import ChapterSeven from "../routes/ChapterSeven";
import ChapterNine from "../routes/ChapterNine";
import axios from "axios";
import ChapterTen from "../routes/ChapterTen";
import ErrorBoundary from "../components/ChapterTen";
import ChapterEleven from "../routes/ChapterEleven";
import PathParam from "../components/ChapterEleven/PathParam";
import ChapterTwelve from "../routes/ChapterTwelve";
import ChapterFourteen from "../routes/ChapterFourteen";
import Setup from "../routes/Setup";

//! Kinda Hack
const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <Setup />
  },
  {
    path: "/chapter-4",
    element: <ChapterFour />,
    children: [
      {
        path: "part-1",
        element: <p className="text-blue-400">Same Layout Different Text</p>
      },
      {
        path: "part-2",
        element: <p className='text-red-400'> Same Layout Different Text</ p >
      }
    ]
  },
  {
    path: "/chapter-5",
    element: <ChapterFive />,
    children: [
      {
        path: 'part-1'
      },
      {
        path: 'part-2'
      }
    ]
  },
  {
    path: '/chapter-6/:id',
    element: <ChapterSix />
  },
  {
    path: "/chapter-7",
    element: <ChapterSeven />
  },
  {
    path: "/chapter-9",
    element: <ChapterNine />,
    loader: async () => {
      const req = await axios.get('/api/todo')
      return req.data
    }
  },
  {
    path: "/chapter-10",
    element: <ChapterTen />,
    //! This Error Element Will Be Loaded When There Is An Error
    errorElement: <ErrorBoundary />,
    loader: () => {
      //! This One is Quite Tricky 
      //! YOU NEED TO RETURN PROMISE FOR THE SUSPENSE TO RUN
      //! If you await, then PROMISE will be RESOLVED
      const todoPromise = async () => {
        const req = await axios.get("/api/todo")
        return req.data
      }

      console.log(todoPromise()) //! You will see it is promise

      //! Defer Is Need, and It only accepts Object
      return defer({ todoPromise: todoPromise() })
    },
  },
  {
    path: "/chapter-11",
    children: [
      {
        path: "",
        element: <ChapterEleven />,
        errorElement: <ErrorBoundary />,
        loader: () => {
          const todoPromise = async () => {
            const req = await axios.get("/api/todo")
            return req.data
          }
          return defer({ todoPromise: todoPromise() })
        }
      },
      {
        path: ":id",
        element: <PathParam />,
        loader: ({ params }) => {
          const pathPromise = async () => {
            const req = await axios.get(`/api/todo/${params.id}`)
            return req.data
          }

          return defer({ pathPromise: pathPromise() })


        }
      },
      {
        path: "search",
        element: <ChapterEleven />,
        errorElement: <ErrorBoundary />,
        loader: ({ request }) => {
          const searchParams = new URL(request.url).searchParams;
          const searchTerm = searchParams.get("task");
          const todoPromise = async () => {
            const req = await axios.get(`/api/search?task=${searchTerm}`)
            return req.data
          }
          return defer({ todoPromise: todoPromise() })
        }
      },

    ]
  },
  {
    path: "/chapter-12",
    element: <ChapterTwelve />
  },
  {
    path: "/chapter-14/:id",
    element: <ChapterFourteen />
  },






  {
    path: "*",
    element: <p>Not Found</p>
  },





])

export default router