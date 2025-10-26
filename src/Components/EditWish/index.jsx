import React from 'react'
import { useState } from 'react'
import Button from '../Button/index.jsx'

export default function EditWish({ wish, onSubmit }) {
  console.log(wish)
  const [newwish, setNewWish] = useState({
    wishName: wish.wishName,
    wishPrice: wish.wishPrice,
    wishLink: wish.wishLink
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    //On submit hides this form
    onSubmit()

  }

  //Change wish to input
  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    console.log(key, value)
    setNewWish(
      {...wish, [key]: value }
      )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input className="input" name="wishName" value={newwish.wishName} onChange={handleChange}></input>
      <label>Price</label>
      <input className="input" name="wishPrice" value={newwish.wishPrice} onChange={handleChange}></input>
      <label>Link</label>
      <input className="input" name="wishLink" value={newwish.wishLink} onChange={handleChange}></input>
      <Button primary type="submit">Save</Button>
    </form>
  )
}
