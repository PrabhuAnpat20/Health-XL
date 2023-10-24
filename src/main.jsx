import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Layout from './Layout.jsx'
import Blogs from './Blogs/Blogs.jsx'
import Contact from './Contact/Contact.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='contact' element={<Contact/>}/>

      

   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
