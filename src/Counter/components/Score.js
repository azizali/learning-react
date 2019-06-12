import React from 'react'

export default class Score extends React.Component{
  constructor(props){
    super(props)
    // DO NOT MUTATE PROPS.
    // this.props.score = 'salasjd'
    console.log('I am constructor')
  }

  componentDidMount(){
    console.log('I am componentDidMount')
  }

  componentDidUpdate(){
    console.log('I am componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('I am componentWillUnmount')
  }

  setScoreToTen = () =>{
    this.props.setScore(10)
  }

  render(){
    console.log('I am render')
    return(
      <div style={{padding: '10px', border: '1px solid black'}}>
      Your score is: {this.props.score}
      <button onClick={this.setScoreToTen}>Set Score to 10</button>
    </div>
    )}
}