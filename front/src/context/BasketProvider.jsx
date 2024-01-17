import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const BasketContext = createContext()

function BasketProvider({children}) {
  const [basket, setBasket] = useLocalStorage("basket", [])

  function addToBasket(item) {
    const index = basket.findIndex((x)=> x._id === item._id)
    if (index === -1) {
      setBasket([...basket, {...item, count:1}])
    }else{
      basket[index].count++
      setBasket([...basket])
    }
  }

  function deleteFromBasket(item) {
    setBasket(basket.filter((x)=> x._id !== item._id))
  }

  function increaseCount(item) {
    const index = basket.findIndex((x)=> x._id === item._id)
    basket[index].count++
    setBasket([...basket])
  }

  function decreaseCount(item) {
    const index = basket.findIndex((x)=> x._id === item._id)
    if (basket[index].count === 1) {
      return;
    }else{
      
      basket[index].count--
      setBasket([...basket])  
    }
   
  }
  

  const basketValue = {basket , addToBasket, deleteFromBasket, increaseCount, decreaseCount}
  return (
    <BasketContext.Provider value={basketValue}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider