import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Home from './components/Home'
import Navbar from './components/Navbar'

const Routers = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,

    },{
      path: '/add-product',
      element: <AddProduct/>
    }
])

const App = () => {
  return (
    <>
     <Navbar/>
     <RouterProvider router={Routers} />
    </>
  )
}

export default App