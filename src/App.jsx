import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Students from './components/Students'
import UpdatePage from './components/UpdatePage'

export default function App(){

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Students />} />
        <Route path='/update_page' element={<UpdatePage />} />
    </Route>
  ))

  return(
      <RouterProvider router={router} />
  )
}