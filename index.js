import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'

// import App from './components/app'
// import Greeter from './components/greeter'
// import ListItems from './components/listItems'

var ComplimentMachine = React.createClass({
  getInitialState: function () {
    return {
      name: ''
    }
  },

  handleChange: function (e) {
    this.setState({
      name: e.target.value
    })
  },

  render: function () {
    return (
      <div>
      <h1>Whats your name?</h1>
      <input type="text" onChange={this.handleChange} />
      <p>{this.props.compliment}, {this.state.name}</p>
      <Counter />
      <p>Hey there</p>
      </div>
    )
  }
})

ReactDOM.render(
  <div>
    <ComplimentMachine compliment='Your smile is awesome'>
    </ComplimentMachine>
  </div>,
  document.getElementById('root')
)











// ReactDOM.render(
//   <App />,
//   document.querySelector('main')
// )

// console.log('welcome to counterGreeter')
