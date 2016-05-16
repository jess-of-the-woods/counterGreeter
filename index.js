import React from 'react'
import { render } from 'react-dom'
// import App from './components/app'
import Counter from './components/counter'
import Greeter from './components/greeter'

render(
      <div>
          <Greeter name='counterGreeter' />
          <Counter name='counterGreeter' />
      </div>,
      document.querySelector('main')
)

console.log('welcome to counterGreeter')
