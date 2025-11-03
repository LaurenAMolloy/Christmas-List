import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import Route from './components/Route';
import { HomePage, WishPage, FAQPage } from './pages';
import './App.css'


function App() {
  const { theme } = useTheme();

  //modal state
  const[isOpen, setIsOpen] = useState(true);
  
  //Modal Function
  const onClose = () => {
    setIsOpen(prev => !prev)
  }

return (
  <>
  <div className={`${theme ? "grinch": ""} app-wrapper`}>
  <Modal isOpen={isOpen} onClose={onClose}/>
    <NavBar />
    <Route path="/"><HomePage /></Route>
    <Route path="/wishlist"><WishPage /></Route>
    <Route path="/faq"><FAQPage /></Route>
  </div>
  </>
)
}

export default App
