import React from 'react'
import ReactDOM from 'react-dom'
import Button, { util } from './Button'
// First Component
// Component is Capitalized
// It always returns a user-interface
// One element can be returned
function App(){
  util()
  return (
    <div>
      <Button id="1" name="a" type="button" value="I am button"/>
      <Button id="2" extra="b" type="submit" value="I am submit"/>
      <Button id="3" type="anchor" value="I am anchor" to="https://salesforce.com" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))