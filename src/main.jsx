import { createRoot } from 'react-dom/client'
import { WishProvider } from './context/WishContext.jsx'
import { ThemeProvider} from './context/ThemeContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <WishProvider>
            <App />
        </WishProvider>
    </ThemeProvider>
    
)
