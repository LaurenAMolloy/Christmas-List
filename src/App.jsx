import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import Modal from './Components/Modal'
import NavBar from './Components/NavBar/Index';
import { HomePage, WishPage, FAQPage } from './Pages';
import './App.css'

function App() {
  const { theme } = useTheme();

  //modal state
  const[isOpen, setIsOpen] = useState(true);
  
  //Modal Function
  const onClose = () => {
    setIsOpen(prev => prev = !prev)
  }

  //Nav State
  const[currentPage, setCurrentPage] = useState(window.location.pathname);


return (
  <>
  <div className={`${theme ? "grinch": ""} app-wrapper`}>
  <Modal isOpen={isOpen} onClose={onClose}/>
  <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
  <HomePage />
  </div>
  </>
)
}

export default App
