import { useState } from 'react'
import React from 'react'

function CreateWish( {setWishes} ) {
  //Empty Object to create wish
  const [wish, setWish] = useState({})

  const handleChange = (e) => {
    console.log(e.target.value)
    const valuetoUpdate = e.target.name
    setWish({
      ...wish,
       [valuetoUpdate]: e.target.value
    }) 
    console.log(wish)
  }

  const handleSubmit = (e) => {
    //stop default behavior
    e.preventDefault();
    console.log('submitting wish', wish)
    setWishes({
      ...wish
    })
  }

  return (
    <>
    <div className="form-container">
    <h4>Enter Your Christmas Wishes on the Form Below</h4>
    <form className="wishForm" onSubmit={handleSubmit}>
      <label htmlFor="wishName">Wish</label>
      <input
      type="text"
      placeholder="Enter your wish"
      name="wishName"
      id="wishName"
      onChange={handleChange}
      value={wish.wishName}
      >
      </input>
      <label htmlFor="wishPrice">Wish Price</label>
      <input
      type="number"
      placeholder="Price of wish"
      name="wishPrice"
      id="wishPrice"
      onChange={handleChange}
      value={wish.wishPrice}>
      </input>
      <label htmlFor="wishLink">Link to Wish</label>
      <input
      type="url"
      placeholder='link'
      name="wishLink"
      id="wishLink"
      onChange={handleChange}
      value={wish.wishLink}
      >
      </input>
      <button type="submit">Submit</button>
    </form>
    </div>
  </>
  )
}

export default CreateWish