import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import Orders from './pages/OrderPage'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
])

export { RouterProvider }
