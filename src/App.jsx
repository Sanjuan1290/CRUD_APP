import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import UpdatePage from './components/Students'

export default function App(){

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<UpdatePage />} />
    </Route>
  ))

  return(
      <RouterProvider router={router} />
  )
}