import { useState } from 'react'

import './App.css'
import { Card } from './Component/cards/Card'
import { Photos } from './Component/Photos/Photos'
import { PhotosDetails } from './Component/PhotosDetails/PhotosDetails'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
               <Routes>
       
       <Route path="/" element={<Card/>}/>
       <Route path="/photos/:id" element={<PhotosDetails/>}/>
       <Route path="*" element={<h1>Not Found</h1>}/>
                  
             
                  </Routes>
      {/* <Photos/> */}
    </>
  )
}

export default App
