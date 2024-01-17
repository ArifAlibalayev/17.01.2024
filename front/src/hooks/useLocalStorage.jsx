import React, { useEffect, useState } from 'react'

function useLocalStorage(key = "localData", initialValue="" ) {
  const [localData, setLocalData] = useState(
    localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localData))

  }, [localData, key])
  

  return [localData, setLocalData]
}

export default useLocalStorage