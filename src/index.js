import './_main/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter/'

function App(){
  return (
    <Counter initialVal={5} />
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))