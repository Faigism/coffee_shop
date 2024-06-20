import { createContext, useContext } from 'react'
import { useState } from 'react'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(false)

  return (
    <GlobalContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppProvider
