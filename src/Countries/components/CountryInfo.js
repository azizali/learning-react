import React from 'react'

export default class CountryInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ageOf100: 0
    }
  }

  componentDidMount(){
    this.fetchPopulation()
  }

  componentDidUpdate(prevProps){
    if(prevProps.countryName !== this.props.countryName){
      this.fetchPopulation()
    }
  }

  fetchPopulation(){
    const { countryName } = this.props
    
    // TEMPLATE LITERALS
    const url = `http://54.72.28.201:80/1.0/population/1980/${countryName}`
    console.log(url)

    fetch(url)
      .then((data)=>{
        return data.json()
      })
      .then((json)=>{
        this.setState({
          ageOf100: json[100].total
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  
  render(){
    return (
      <div>
        I am {this.props.countryName}
        {this.state.ageOf100}
      </div>
    )
  }
}
