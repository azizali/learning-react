import React from 'react'
import ReactDOM from 'react-dom'
import { Cars } from './Cars/Cars'
import Wrap from './Wrap/Wrap'
import Button from './Button'

function App(){
  return (
    <div>
      <Wrap hasHeader={true}>
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