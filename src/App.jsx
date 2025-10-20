import { useState } from 'react'
import WishList from './Components/WishList'
import CreateWish from './Components/CreateWish'
import './App.css'

function App() {
  
  //Array to stores all wishes
  const[wishes, setWishes] = useState([]);

  
return (
  <>
  <CreateWish setWishes={setWishes}  wish={wishes} setWish={setWishes} />
  <WishList wishes={wishes}  />
  </>
)

}

export default App
