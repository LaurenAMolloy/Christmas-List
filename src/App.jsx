import { useEffect, useState } from 'react'
import WishList from './Components/WishList'
import CreateWish from './Components/CreateWish'
import axios from 'axios'
import './App.css'

function App() {
  //Array to stores all wishes
  const[wishes, setWishes] = useState([]);
 
  //Fetch wishes from db onload
  const fetchWishes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/wishes')
      setWishes(response.data);
    } catch (error) {
      console.log('Error fetching wishes', error)
    }
  }

  // Run once on load
  useEffect(() => {
    fetchWishes();
  }, []);
  

  //Create a wish
  const wishCreate = async (wish) => {
    //send wish to db
    const res = await axios.post('http://localhost:3000/wishes', {
    ...wish,
    id: nanoid()
    });
    console.log(res)
    //new variable to hold updated wishes
    const updatedWishes = [
      ...wishes,
      res.data
    ]
    //Update the state
    setWishes(updatedWishes)
  }

  const editWishById = async (id, newName, newPrice, newLink) => {
    const response = await axios.put(`http://localhost:3000/wishes/${id}`, {
    wisheName: newName,
    wishPrice: newPrice,
    wishLink: newLink,
    });

    const updatedWishes = wishes.map((wish) => {
      if(wish.id === id) {
        return {...wish, ...response.data}
      }
      return wish
    });
    setBooks(updatedWishes);
  }

return (
  <>
  <CreateWish setWishes={setWishes}  wish={wishes} wishCreate={wishCreate}  />
  <WishList wishes={wishes}  />
  </>
)

}

export default App
