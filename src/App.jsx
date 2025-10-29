import WishList from './Components/WishList'
import CreateWish from './Components/CreateWish'
import  Accordion from './Components/Accordion/index.jsx'
import Toggle from './Components/ThemeToggle/index'
import { useTheme } from './context/ThemeContext'
import './App.css'

function App() {
  const { theme } = useTheme()
  
return (
  <>
  <div className={`${theme ? "grinch": ""} app-wrapper`}>
  <Toggle />
  <CreateWish   />
  <WishList   />
  <Accordion />
  </div>
  </>
)

}

export default App
