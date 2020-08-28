import React from 'react'
import { Route } from 'react-router-dom'

import Canvas from './Canvas'
import BigImage from './BigImage'
import TextOverlay from './TextOverlay'
import PrintScreen from './PrintScreen'
import ReturnToHome from './ReturnToHome'
import ShareURL from './ShareURL'

function YourMeme(props) {
  return (
    <>
      {/* <BigImage {...props}/> */}
      <Canvas {...props}/>
      <ReturnToHome />
      <ShareURL />
    </>
  )
}

export default YourMeme

//Display meme; image with text overlay, nice message
