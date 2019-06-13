import '../style.css'
import React from 'react'
import CountryInfo from './CountryInfo'

export default class Countries extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      selected: 'Brazil'
    }
  }

  componentDidMount(){
    const url = 'http://54.72.28.201:80/1.0/countries'
    
    // Asynchronous
    // Promises
    fetch(url, {
      headers: {
        accept: 'application/json'
      }
    }) // 10 seconds
      .then((data)=>{
        return data.json()
      })
      .then((json)=>{
        console.log(json)
        this.setState({
          countries: json.countries
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    console.log('Hi')
  }

  selectCountry = (event)=>{
    console.log(event.target.textContent)
    this.setState({
      selected: event.target.textContent
    })
  }

  render(){
    return (
      <div className="wrap">
        <div className="country-list">
          {this.state.countries.map((item)=>{
            return (
              <button
              style={{display: 'block'}}
              key={item}
              onClick={this.selectCountry}
              >
                {item}
              </button>
            )
          })}
          <pre>
            {JSON.stringify(this.state.selected, null, 2)}
          </pre>
        </div>
        <div className="country-info">
          <CountryInfo countryName={this.state.selected} />
        </div>
      </div>
    )
  }
}