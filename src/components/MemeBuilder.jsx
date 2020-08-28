import React from 'react'

import {Image} from 'semantic-ui-react'

import TextInput from './TextInput'
import BigImage from './BigImage'
import ReturnToImageList from './ReturnToImageList'

function MemeBuilder (props) {
  // const Meme = props.match.params.image

  return (
    <>
      <TextInput />
      {/* <Image src={`/images/${Meme}.png`}/> */}
      <BigImage {...props}/>
      <ReturnToImageList />
    </>
  )
}

export default MemeBuilder