import React from 'react'
import PropTypes from 'prop-types'
import './button.css'
// REST OPERATOR
// SPREAD OPERATOR

// OBJECT DESTRUCTURING
// var type = props.type
// var value = props.value
// var to = props.to
// var {}
function Button({ to, type, children, ...props}){
  if(type === 'button'){
    return <button style={{
      backgroundColor: 'blue',
      fontSize: '2em'
    }} { ...props}>{children}</button>
  }else if(type === 'anchor'){
    return <a className="btn" {...props} href={to}>{children}</a>
  } else if(type === 'submit'){
    return <input {...props} type="submit" value={children} />
  }
}

Button.defaultProps = {
  type: 'button',
  children: 'Click me'
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "anchor"])
}

function util (){
  console.log('util')
}

// DEFAULT EXPORT
export default Button
// import WHATEVERNAME from './LOCATION'

// NAMED EXPORT
export {
  util
}
// import { util } from './LOCATION'
