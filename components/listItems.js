import React, { Component } from 'react'

class ListItems extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const items = this.props.items
    return (
      <ul>
      <p>Yea, heres a title for the list</p>
        {
          items.map(function(item, index){
            return <li key={index}>{item}</li>;
          })
        }
      </ul>
    )
  }
}

export default ListItems
