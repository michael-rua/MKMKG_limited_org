import React from 'react'

import {Grid, Image} from 'semantic-ui-react'

import ReturnToHome from './ReturnToHome'

// import Don from "/images/don.png"
// import Karel from "/images/karel.png"
// import Emily from "/images/emily.png"
// import Prue from "/images/prue.png"

function ImageList() {
  
  return (
    <>
      <h1>Choose your victim:</h1>

      <Grid padded>

        <Grid.Row columns={4}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src='/images/don.png' href='#/memeBuilder/don' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/karel.png' href='#/memeBuilder/karel' />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src='/images/emily.png' href='#/memeBuilder/emily' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/prue.png' href='#/memeBuilder/prue' />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

      </Grid>

      <ReturnToHome />
    </>
  )
}

export default ImageList

//List or gallery view of 4 images
