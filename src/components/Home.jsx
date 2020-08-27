import React from 'react'

import { Button } from 'semantic-ui-react'


function Home() {
  return (
    <>
      
      <h2>React to our memes</h2>
      <div>
        <Button animated='fade' size='massive' href='/#/imageList' color='red'>
          <Button.Content visible>Click Me to make a MEME</Button.Content>
          <Button.Content hidden>MEME Time!!!</Button.Content>
        </Button>
      </div>
    </>
  )
}

export default Home

//Title
//Link to start making a meme
