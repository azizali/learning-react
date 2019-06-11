import React from 'react'
import data from './data'

export function Cars (){
  return (<>
  {data.map(function(item, index){
    return <div key={index}>{item.name}</div>
  })}
  </>)
}