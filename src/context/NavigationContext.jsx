import React from 'react'

export default function NavProvider({ children }) {
    //Nav State
    const[currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <NavigationContext.Provider value={{}} >
        {currentPath}
        {children}
    </NavigationContext.Provider>
    
  )
}
