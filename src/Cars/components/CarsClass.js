import React from 'react'
import data from '../data'

class Cars extends React.Component {
  renderABC(){
    return 1 + 1
  }
  render() {
    return (<>
      {this.props.title}
      {this.renderABC()}
      {data.map(function(item, index) {
        return <div key={index}>{item.name}</div>
      })}
    </>)
  }
}

export default Cars