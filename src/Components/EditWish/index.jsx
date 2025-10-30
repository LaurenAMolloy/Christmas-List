import React from 'react'
import { useState, useContext } from 'react'
import Button from '../Button/index.jsx'
import wishContext from '../../context/WishContext.jsx';

export default function EditWish({ wish, onSubmit }) {
  const { editWishById } = useContext(wishContext);
  console.log(wish)
  
  const [newWish, setNewWish] = useState(wish)
  //console.log("newWish", newWish)

  const handleSubmit = (e) => {
    e.preventDefault();
    //On submit hides this form
    //Passes newwish to parent
    editWishById(newWish.id, newWish)
    onSubmit()
  }

  //Change wish to input
  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    //console.log(key, value)
    setNewWish(
      {...newWish, [key]: value }
      )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input className="input" name="wishName" value={newWish.wishName} onChange={handleChange}></input>
      <label>Price</label>
      <input className="input" name="wishPrice" value={newWish.wishPrice} onChange={handleChange}></input>
      <label>Link</label>
      <input className="input" name="wishLink" value={newWish.wishLink} onChange={handleChange}></input>
      <Button primary type="submit">Save</Button>
    </form>
  )
}
