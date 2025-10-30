import { useState } from 'react'
import WishList from './Components/WishList'
import CreateWish from './Components/CreateWish'
import  Accordion from './Components/Accordion/index.jsx'
import Toggle from './Components/ThemeToggle/index'
import { useTheme } from './context/ThemeContext'
import Modal from './Components/Modal'
import './App.css'

function App() {
  const { theme } = useTheme();

  //modal state
  const[isOpen, setIsOpen] = useState(true);
  
  //Modal Function
  const onClose = () => {
    setIsOpen(prev => prev = !prev)
  }

return (
  <>
  <div className={`${theme ? "grinch": ""} app-wrapper`}>
  <Modal isOpen={isOpen} onClose={onClose}/>
  <Toggle />
  <CreateWish   />
  <WishList   />
  <Accordion />
  </div>
  </>
)
}

export default App
