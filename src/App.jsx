import { useState } from 'react'
import WishList from './Components/WishList'
import CreateWish from './Components/CreateWish'
import './App.css'

function App() {
  
  //Array to stores all wishes
  const[wishes, setWishes] = useState([]);

  const wishCreate = (wish) => {
    setWishes(prev => [...prev, wish])
  }

return (
  <>
  <CreateWish setWishes={setWishes}  wish={wishes} wishCreate={wishCreate}  />
  <WishList wishes={wishes}  />
  </>
)

}

export default App
