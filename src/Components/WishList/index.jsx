import React from 'react'
import { nanoid }  from 'nanoid'

export default function WishList({ wishes }) {

   const handleDeleteClick = () => {
    console.log("delete wish")
   }
   const handleEditClick = () => {
    console.log("edit wish")
   }
   
  const renderedWishes = wishes.map((wish, idx) => {
     return <>
      <div className="wishCard" key={nanoid()}>
      <h3>Wish {idx + 1}</h3>
      <p>{wish.wishName}</p>
      <p><span>£</span>{Number(wish.wishPrice)}</p>
      <p>{wish.wishLink}</p>
      <div className="actions">
        <button onClick={handleDeleteClick} className="edit">Edit</button>
        <button onClick={handleEditClick} className="delete">Delete</button>
      </div>
      </div>
     </>
  });
  //conditional rendering for wishlist
  return (
    <div>
      {wishes && wishes.length > 0 ? (
      <div className="wishlistItems">
      {renderedWishes}
      </div>) : (
      <p>No wishes yet</p>
    )}
    </div>
  )
}

