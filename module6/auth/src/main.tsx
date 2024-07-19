import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Register from './components/Register'
import Login from './components/Login'
// import "./config" //! Default Headers Options


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>

)

