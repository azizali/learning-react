import React from 'react'

export default function Wrap ({hasHeader, children}){
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px'
      }}
      >
        {hasHeader? 'Logo Goes Here': null}
        {children}
    </div>
  )
}

Wrap.defaultProps ={
  hasHeader: false
}