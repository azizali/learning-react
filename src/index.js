import './_main/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
// import Counter, { CounterClass } from './Counter/'
// import Cars, { CarsClass } from './Cars/'
import { CountryList } from './Countries/'

function App(){
  return (
    <>
      <CountryList />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))