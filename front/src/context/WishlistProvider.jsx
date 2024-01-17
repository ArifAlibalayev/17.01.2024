import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({children}) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

  function addToWishlist(item) {
    const index = wishlist.findIndex((x)=> x._id === item._id)
    if (index === -1) {
      setWishlist([...wishlist, item])
    }else{
      setWishlist(wishlist.filter((x)=> x._id !== item._id))
    }
  }

  const wishlistValue = {wishlist , addToWishlist}
  return (
    <WishlistContext.Provider value={wishlistValue}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider