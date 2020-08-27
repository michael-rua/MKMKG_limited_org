import React from 'react'
import { Route } from 'react-router-dom'

function PrintScreen() {
  return (
    <>
      <h1>PrintScreen</h1>
      <button class="button" type="button"><a href="#" onclick="window.print();return false;" title="Print Meme">Print Meme</a></button>
    </>
  )
}

export default PrintScreen

//Calls print window

