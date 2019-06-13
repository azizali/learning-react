import '../style.css'
import React, { useState, useEffect } from 'react'
import CountryInfoHook from './CountryInfoHook'

export default function Countries (){
  const [counter, setCounter] = useState(0)
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState('Brazil')

  // RUN ONCE / COMPONENT DID MOUNT
  useEffect(()=>{
    const url = 'http://54.72.28.201:80/1.0/countries'
    
    fetch(url, {
      headers: {
        accept: 'application/json'
      }
    })
      .then((data)=> data.json())
      .then((json)=>{
        setCountries(json.countries)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [])

  const selectCountry = (event)=>{
    setSelected(event.target.textContent)
  }

  return (
    <div className="wrap">
      <div>
        <button onClick={()=>{ setCounter(counter+1) }}>{counter} +</button>
        <button onClick={()=>{ setCounter(counter-1) }}>{counter} -</button>
      </div>
      <div className="country-list">
        {countries.map((item)=>{
          return (
            <button
            style={{display: 'block'}}
            key={item}
            onClick={selectCountry}
            >
              {item}
            </button>
          )
        })}
        <pre>
          {selected}
        </pre>
      </div>
      <div className="country-info">
        {
          counter > 1 &&
          <CountryInfoHook countryName={selected} />
        }
      </div>
    </div>
  )
}