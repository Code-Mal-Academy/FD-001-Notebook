import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>

)

