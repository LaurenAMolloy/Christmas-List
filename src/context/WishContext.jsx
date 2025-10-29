import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid'

const wishContext = createContext()

export function WishProvider({ children }) {
    //Here are all the logic and functions to provide through Context!
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

  const editWishById = async (id, updatedWish) => {
    const response = await axios.put(`http://localhost:3000/wishes/${id}`, 
      updatedWish);

    const updatedWishes = wishes.map((wish) => {
      if(wish.id === id) {
        return {...wish, ...response.data}
      }
      return wish
    });
    setWishes(updatedWishes);
  }

  const deleteWishbyId = async (id) => {
    await axios.delete(`http://localhost:3000/wishes/${id}`)
    //mechanism to check if id is equal to one clicked?
    //filter
    const updatedWishes = wishes.filter((wish) => wish.id !== id)
    setWishes(updatedWishes)
  }

  const valuesToShare = {
    wishes,
    setWishes,
    expanded,
    setExpanded,
    wishCreate,
    editWishById,
    deleteWishbyId

  }

  return (
    <wishContext.Provider value={valuesToShare} >
        {children}
    </wishContext.Provider>
  )
}


export default wishContext;
export const useWish = () => useContext(wishContext);
