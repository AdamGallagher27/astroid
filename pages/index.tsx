
// import styles from '@/styles/Home.module.css'
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";


const API_KEY: string = 'dsHDwoVaKhrkd78tefIhRQ1SedznGPz298f5Ml3P' 



export default function Home() {
  const [astroid, setAstroid] = useState<any>({})
  const [ready, setReady] = useState(false);


  useEffect(() => {
    getAstroid()
  }, [])
  
  const getAstroid = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`)
      const data = await response.json()
      setAstroid(data.near_earth_objects['2015-09-07'])
      console.log(data.near_earth_objects['2015-09-07'])
    } catch (error) {
      console.error(error)
    }
    setReady(true)
  }

  const renderCard = (data: any, id: string) => {
    return(<Card data={data} id={id} />)
  }


  return (
    <>
      <Header />

      <div className="grid lg:grid-cols-3 p-3 gap-10 mx-10">
        {ready ? astroid.map((value: any) => renderCard(value, value.id)): 
          <div className="text-white text-lg">Loading Meteor Data...</div>
        }
      </div>

      <p>
        {/* {API_KEY}
        {JSON.stringify(astroid)} */}
      </p>
    </>
  )
}