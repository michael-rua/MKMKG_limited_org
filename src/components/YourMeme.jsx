import React from 'react'
import { Route } from 'react-router-dom'

import BigImage from './BigImage'
import TextOverlay from './TextOverlay'
import PrintScreen from './PrintScreen'
import ReturnToHome from './ReturnToHome'

function YourMeme(props) {
  return (
    <>
      <h1>YourMeme</h1>
      <BigImage {...props}/>
      <TextOverlay />
      <PrintScreen />
      <ReturnToHome />
    </>
  )
}

export default YourMeme

//Display meme; image with text overlay, nice message
