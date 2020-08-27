import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import ImageList from './ImageList'
import MemeBuilder from './MemeBuilder'
import YourMeme from './YourMeme'

function App() {
  return (
    <>
      <div className="App">
          <h1>Meme Machine</h1>
          <Route exact path='/' component={Home} />
          <Route path='/imageList' component={ImageList} />
          <Route path='/memeBuilder' component={MemeBuilder} />
          <Route path='/yourMeme' component={YourMeme} />
      </div>
    </>
  )
}

export default App
