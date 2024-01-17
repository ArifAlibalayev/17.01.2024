import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider'
import './index.scss'

function Basketpage() {
  const {basket , addToBasket, deleteFromBasket, increaseCount, decreaseCount} = useContext(BasketContext)
  return (
    <section id='Basket'>
      <h1>Basket </h1>
      <table>
      <thead>
  <tr>
    <th>name</th>
    <th>description</th>
    <th>operations</th>
    <th>Basket Count</th>
  </tr>
  </thead>
  <tbody>
  {basket.map((x)=>(
    <tr key={x._id}>
    <td>{x.name}</td>
    <td>{x.desc}</td>
    <td ><button onClick={()=>deleteFromBasket(x)}>x</button></td>
    <td style={{display:"flex",gap:"20px"}}>
    <button onClick={()=>decreaseCount(x)}>-</button>
    <h1>{x.count}</h1>
    <button onClick={()=>increaseCount(x)}>+</button>

    </td>
  </tr>
  ))}
  </tbody>
  </table>
    </section>
  )
}

export default Basketpage