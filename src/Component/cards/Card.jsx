import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Card.css'
import {Picture} from '../picture/Picture.jsx'
export function Card() {
    const [photos_array,setPhotos_array]=useState([])
   const photos_Url='https://api.slingacademy.com/v1/sample-data/photos' 
   async function getPhotos(){
    const res=await axios.get(photos_Url)
    const photos_res=await res.data.photos
    // console.log(photos_res)
    const final_photos=photos_res    //.map(pic=>{
      
        // return{
        //     id:pic.id,
        //     description:pic.description,
        //     image_url:pic.url,
        //     title:pic.title
        // }
   // })
    setPhotos_array(final_photos)
    console.log(final_photos)
    //  console.log(res.data)
    }

     useEffect(()=>{
     getPhotos()
        },[])

    

    return (
        <>
    <div className='photos-card'>
        
        <div className='photos-card-wrapper'>

        {photos_array.map((picture,key={idx})=><Picture   image_url={picture.url} id={picture.id} />)}
        </div>
    </div>
        
        </>
    )
}
