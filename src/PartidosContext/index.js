import React, { createContext, useEffect, useState } from 'react'

import { getMatches } from '../database'

const PartidosContext = createContext() 

const PartidosProvider = ({children}) => {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches(setMatches)
  }, [])


  return (
    <PartidosContext.Provider value={{matches}}>
      {children}
    </PartidosContext.Provider>
  )
}

export { PartidosProvider, PartidosContext }