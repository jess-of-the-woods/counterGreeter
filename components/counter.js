import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  render(){
    return (
      <div>
        <h2 onClick={()=>this.setState({count: this.state.count + 1})} > Oh! How nice! I have been clicked on {this.state.count} times</h2>
        <h3>It is a little weird to be honest.. I mean why do people just keep on clicking on me? Are they getting something out of it? Will it ever end?</h3>
      </div>
    )
  }
}

export default Counter
