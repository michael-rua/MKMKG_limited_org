import React from 'react'

import {Grid, Image} from 'semantic-ui-react'

function ImageList() {
  return (
    <>
      <h1>ImageList</h1>

      <Grid padded>
        <Grid.Row columns={5}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row columns={5}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row columns={5}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://via.placeholder.com/640x360' />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  )
}

export default ImageList

//List or gallery view of 4 images
