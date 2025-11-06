import { createRoot } from 'react-dom/client'
import { WishProvider } from './context/WishContext.jsx'
import { NavProvider } from './context/NavigationContext.jsx'
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
        <Provider store = {store}>
            <NavProvider>
                <WishProvider>
                    <App />
                </WishProvider> 
            </NavProvider> 
        </Provider>
)
