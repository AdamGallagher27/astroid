
// import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";


const API_KEY: string = 'dsHDwoVaKhrkd78tefIhRQ1SedznGPz298f5Ml3P' 



export default function Home() {
  const [astroid, setAstroid] = useState<any>({})

  const getAstroid = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`)
      const data = await response.json()
      setAstroid(data.near_earth_objects['2015-09-07'])
      console.log(data.near_earth_objects['2015-09-07'])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAstroid()
    console.log(astroid)
  }, [])
  


  return (
    <>
      <p>
        {API_KEY}
        {JSON.stringify(astroid)}
      </p>
    </>
  )
}