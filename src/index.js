import './_main/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Counter, { CounterClass } from './Counter/'
// import Cars, { CarsClass } from './Cars/'

function App(){
  return (
    <>
    {/* <Cars title="Function Cars" />
    <hr/>
    <CarsClass title="Class Cars" /> */}
    <Counter initialVal={0} />
    <hr />
    <CounterClass initialVal={5} />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))