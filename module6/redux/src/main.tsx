import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReduxFetcher from './components/ReduxFetcher'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/data",
    element: <ReduxFetcher />
  }


])


ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)

