import React from 'react'
import ReactDOM from 'react-dom'

// First Component
// Component is Capitalized
// It always returns a user-interface
// One element can be returned
function App(){
  var appName = 'Name of App'
  var isLive = false;
  return (
    <div>
      <header>Logo goes here {appName}</header>
      { 2 / 5 }
      <br/>
      { (isLive)? <Person name="SalesForce" /> : null }
      <br/>
      <footer>Footer info</footer>
    </div>
  )
}

function Person(props){
  return (
    <>
      Company Name: {props.name}<br />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))