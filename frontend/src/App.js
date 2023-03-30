import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Main from './components/Main'

const Routers = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,

    },{
      path: '/add-product',
      element: <AddProduct/>
    }
])

const App = () => {
  return (
    <>
     <RouterProvider router={Routers} />
    </>
  )
}

export default App