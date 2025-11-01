import { createContext, useContext, useState} from 'react'

const ThemeContext = createContext()


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


export const useTheme = () => useContext(ThemeContext);






