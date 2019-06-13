/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

export default function CountryInfo ({countryName}){
  const [age, setAge] = useState(0)

  const fetchPopulation = ()=>{
    // TEMPLATE LITERALS
    const url = `http://54.72.28.201:80/1.0/population/1980/${countryName}`

    fetch(url)
      .then((data)=> data.json())
      .then((json)=>{
        setAge(json[100].total)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  useEffect(()=>{
    console.log('hi')
    fetchPopulation()

    // MECHANISM
    // RUN ME WHEN MY CURRENT VALUE CHANGES,
    // BEFORE THE NEW VALUE COMES
    return ()=>{
      // HEY THE OLD INFO IS NO LONGER VALID, SO DO SOMETHING
      // UNSUBSCRIBE, LOGOUT 
      console.log('Cleanup Ran')
    }
  }, [countryName])

  return (
    <div>
      I am {countryName}
      {' '}
      {age}
    </div>
  )
}
