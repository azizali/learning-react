import './_main/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
// import Counter, { CounterClass } from './Counter/'
// import Cars, { CarsClass } from './Cars/'
import { CountryListHook } from './Countries/'

function App(){
  return (
    <>
      <CountryListHook />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))