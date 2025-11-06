import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import Route from './components/Route';
import { HomePage, WishPage, FAQPage, TablePage } from './pages';
import './App.css'


function App() {
  //Access state from slice
  const theme = useSelector((state) => state.theme.theme)
 

  //modal state
  const[isOpen, setIsOpen] = useState(true);
  
  //Modal Function
  const onClose = () => {
    setIsOpen(prev => !prev)
  }

return (
  <>
  <div className={`${theme} app-wrapper`}>
  <Modal isOpen={isOpen} onClose={onClose}/>
    <NavBar />
    <Route path="/"><HomePage /></Route>
    <Route path="/wishlist"><WishPage /></Route>
    <Route path="/faq"><FAQPage /></Route>
    <Route path="/table"><TablePage /></Route>
  </div>
  </>
)
}

export default App
