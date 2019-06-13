
import React, {useState, useEffect, useCallback} from 'react'

export default function CountryInfo ({countryName}){
  const [age, setAge] = useState(0)

  const fetchPopulation = useCallback(() =>{
    // TEMPLATE LITERALS
    const url = `http://54.72.28.201:80/1.0/population/1980/${countryName}`

    fetch(url)
      .then((data)=> data.json())
      .then((json)=>{
        // let population = 0
        // json.forEach((item)=>{
        //   population += item.total
        // })

        const population = json.reduce((total, item) => {
          return total + item.total
        }, 0)

        setAge(population)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [countryName])

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
  }, [countryName, fetchPopulation])

  return (
    <div>
      I am {countryName}
      {' '}
      {age}
    </div>
  )
}
