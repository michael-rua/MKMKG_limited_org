import React, { Component } from 'react'

class TextInput extends Component {
  constructor(props) {
  super(props)
    this.state = {
    text: ''
  }
}

  handleURL = () => {
    this.props.history.push(`/${this.props.match.params.image}/${this.state.text}`)
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value })
  }


  render() {
    return (
      <>
        <form>
          <input type="text" placeholder="Write your meme text..." value={this.state.text} onChange={this.handleChange} />
          <input type="submit" onClick={this.handleURL} />
        </form>
      </>
    )
  }
}

export default TextInput

