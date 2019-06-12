import React from 'react'
import data from '../data'

export default function Cars (props){
  return (<>
  {props.title}
  {data.map(function(item, index){
    return <div key={index}>{item.name}</div>
  })}
  </>)
}