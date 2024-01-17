import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistProvider'
import './index.scss'

function Wishlistpage() {
  
  const {wishlist, addToWishlist} = useContext(WishlistContext)

  return (
    <section id='Wishlist'>
      <table>
      <thead>
  <tr>
    <th>name</th>
    <th>description</th>
    <th>operations</th>
  </tr>
  </thead>
  <tbody>
  {wishlist.map((x)=>(
    <tr key={x._id}>
    <td>{x.name}</td>
    <td>{x.desc}</td>
    <td ><button onClick={()=>addToWishlist(x)}>x</button></td>
  </tr>
  ))}
  </tbody>
  </table>
    </section>
  )
}

export default Wishlistpage