import { useEffect, useState } from 'react'
import WishList from './Components/WishList'
import CreateWish from './Components/CreateWish'
import axios from 'axios'
import {nanoid}  from 'nanoid'
import  Accordion from './Components/Accordion/index.jsx'
import './App.css'

function App() {
  //Set state to empty Array to stores all wishes objects
  const[wishes, setWishes] = useState([]);

  //Track expanded state 
  //0 first open
  //1 second item open
  //2 third open
  //-1 all closed
  const[expanded, setExpanded] = useState(-1);
 
  //Fetch wishes from db onload
  const fetchWishes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/wishes')
      setWishes(response.data);
    } catch (error) {
      console.log('Error fetching wishes', error)
    }
  }

  //Fetch existing wishes first render
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

  const deleteWishbyId = async (id) => {
    await axios.delete(`http://localhost:3000/wishes/${id}`)
    //mechanism to check if id is equal to one clicked?
    //filter
    const updatedWishes = wishes.filter((wish) => wish.id !== id)
    setWishes(updatedWishes)
  }

return (
  <>
  <Accordion expanded={expanded} setExpanded={setExpanded}></Accordion>
  <CreateWish setWishes={setWishes}  wish={wishes} wishCreate={wishCreate}  />
  <WishList wishes={wishes} deleteWishById={deleteWishbyId} editWishById={editWishById}  />
  </>
)

}

export default App
