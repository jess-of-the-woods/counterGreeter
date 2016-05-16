import React, { Component } from 'react'

class Greeter extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Youve discovered {this.props.name}!</h1>
        <h2>Impressive to say the least!</h2>
      </div>
    )
  }
}

export default Greeter
