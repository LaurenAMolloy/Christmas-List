import { useState } from 'react'
import React from 'react'

function CreateWish( { wishCreate } ) {
  //Empty object to set wish state
  const [wish, setWish] = useState( {
    wishName: "",
    wishPrice: "",
    wishLink: "",
  })

  const handleChange = (e) => {
    const valuetoUpdate = e.target.name
    setWish({
      ...wish,
      [valuetoUpdate]: e.target.value
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('submitting wish', wish)
    wishCreate(wish)
    //Reset wish values after submission
    setWish({
      wishName:"",
      wishPrice: "",
      wishLink: "",
    })
  }

  return (
    <>
    <div className="form-container">
    <h4>Enter Your Christmas Wishes</h4>
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