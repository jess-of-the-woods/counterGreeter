import React, { Component } from 'react'
import Counter from './counter'
import Greeter from './greeter'
import ListItems from './listItems'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div>
      <Greeter name='counterGreeter'>
      </Greeter>
      <ListItems items={['blue', 'green', 'black', 'brown']}/>
      <Counter />
    </div>)
  }

}

export default App
