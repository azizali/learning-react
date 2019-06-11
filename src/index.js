import React from 'react'
import ReactDOM from 'react-dom'
import { Cars } from './Cars/Cars'

function App(){
  return <Cars />
}

ReactDOM.render(<App />, document.querySelector('#app'))