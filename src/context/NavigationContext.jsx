import { createContext, useState, useEffect } from 'react'


const NavigationContext = createContext()

function NavProvider({ children }) {
    //Nav State
    const[currentPath, setCurrentPath] = useState(window.location.pathname);

    //Listen for backwards and forwards presses
    useEffect(() => {
        
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handler);

        return () => window.removeEventListener('popstate', handler)
        
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, "", to);
        setCurrentPath(to);
    };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }} >
        {children}
    </NavigationContext.Provider>
  )
}

export { NavProvider }
export default  NavigationContext;