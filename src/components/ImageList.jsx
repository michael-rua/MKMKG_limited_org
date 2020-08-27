import React from 'react'

import {Grid, Image} from 'semantic-ui-react'

import Don from "../images/don.png"
import Karel from "../images/karel.png"
import Emily from "../images/emily.png"
import Prue from "../images/prue.png"

function ImageList() {
  return (
    <>
      <h1>ImageList</h1>

      <Grid padded>

        <Grid.Row columns={4}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src={Don} />
          </Grid.Column>
          <Grid.Column>
            <Image src={Karel} />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src={Emily} />
          </Grid.Column>
          <Grid.Column>
            <Image src={Prue} />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  )
}

export default ImageList

//List or gallery view of 4 images
