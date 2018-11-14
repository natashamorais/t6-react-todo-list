import React from 'react'
import './pageNotFound.css'
import NotFoundImage from './notfound.jpg'

function PageNotFound(){

  return(
    <div 
    className = 'page-not-found'>
      < h1 > Não tem nada aqui </h1>
      <img src={NotFoundImage} className='page-not-found__image'></img>/>
    </div>
  )
}

export default PageNotFound