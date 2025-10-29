import { createContext, useContext, useState} from 'react'

//Create context object
const ThemeContext = createContext()

//Create provider
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);

    const themeToggle = () => {
        setTheme(prev => !prev)
    }

    return(
        <ThemeContext.Provider value={{ theme, themeToggle} }>
            {children}
        </ThemeContext.Provider>
    )
}

//export custom hook
export const useTheme = () => useContext(ThemeContext);






