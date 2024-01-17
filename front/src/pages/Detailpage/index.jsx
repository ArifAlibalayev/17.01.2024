import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detailpage() {
  const [apiData, setApiData] = useState([])

  let {id} = useParams()
  

  useEffect(() => {
    getData()
  }, [])
  

  async function getData() {
    const res = await fetch(`http://localhost:3000/${id}`)
    const data = await res.json()
    setApiData(data)
  }

  console.log(apiData);
  return (
    <div>
      <h1>Salam</h1>
        <h1>{apiData.title}</h1>
    </div>
  )
}

export default Detailpage