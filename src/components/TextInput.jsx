import React from 'react'

//import { Input, Image, Button, Segment } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

function TextInput() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Input
            placeholder='Meme text....'
            name='memeText'
            value={'memeText'}
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    </>
  )
}

export default TextInput

//Form field input for meme text, submit button
  // < div >
  // <h1>TextInput</h1>
  // <Input focus placeholder='Meme text...' />
  // <Segment inverted>
  //   <Button inverted color='blue'>
  //     Submit
  //         </Button>
  // </Segment>
  // </div >