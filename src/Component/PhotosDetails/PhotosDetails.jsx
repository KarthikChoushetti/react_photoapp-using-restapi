//css imports
import './PhotosDetails.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export function PhotosDetails() {
    const {id}=useParams()
const [pict,setPict]=useState({})
    // const [picture_id,setPicture_id]=useState('')
  
    async function download_pictureDetails(){
    const response= await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}/`)
    const pictures=  await response.data.photo
    setPict(()=>(pictures))
//   console.log(pictures)
    
   }

useEffect(()=>{
 download_pictureDetails()
},[])
    return (
  
        <div className='main-content'>
            <div className='singlePict-img'>
                <img src={pict.url} alt="no image" />
            </div>
            <div className='title'>  <h1>{pict.title}</h1> 
        {pict.description}</div>
           

        </div>
       
    )
}
