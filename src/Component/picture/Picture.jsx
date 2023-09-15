import React from 'react'
import './Picture.css'
import { Link } from 'react-router-dom'
export function Picture({image_url,id}) {
    

    return (
        <>
      <Link className='picture-wrapper'  to={`/photos/${id}`}>
    <div className='picture'>
      
      {/* <div><h1>{id}</h1></div>
          <div> <h2>{title}</h2></div>   */}
         

            <img src={image_url} alt="error" />
          {/* <div> <h3>{description}</h3></div>   */}
    </div>
            </Link>
        </>
    )
}
