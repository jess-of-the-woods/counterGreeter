import React, { Component } from 'react'

class Greeter extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Welcome!</h1>
        <h1>You have discovered {this.props.name}!</h1>
        <h2>Impressive to say the least!</h2>
      </div>
    )
  }
}

export default Greeter
