import React from 'react'
import ReactDOM from 'react-dom'
import { Cars } from './Cars/'
import Wrap from './Wrap/'
import Button from './Button/'
import LoginLayout from './Login/'

function App(){
  return (
    <div>
      <Wrap hasHeader={true}>
        <LoginLayout />
        <Button>Click me please</Button>
        {/* <Button value="click text" /> */}
        Info one
      </Wrap>
      <Wrap>
        Info Two
      </Wrap>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))