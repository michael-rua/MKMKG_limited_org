import React from 'react'

import {Image} from 'semantic-ui-react'

import TextInput from './TextInput'
import BigImage from './BigImage'
import ReturnToImageList from './ReturnToImageList'

function MemeBuilder (props) {
  const Meme = props.match.params.image

  return (
    <>
      <h1>MemeBuilder</h1>
      <TextInput />
      <Image src={`/images/${Meme}.png`}/>
      {/* <BigImage /> */}
      <ReturnToImageList />
    </>
  )
}

export default MemeBuilder