import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
// const router=createBrowserRouter()
{/* <RouterProvider router={router}/> */}
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
<App/>
    </BrowserRouter>
 
)
