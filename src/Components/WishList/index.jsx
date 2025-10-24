import React from 'react'
import WishShow from '../WishShow';

export default function WishList({ wishes, editWishById, deleteWishById }) {

  //For every wish in wish list render a wishShow component
  //Use the idx as the unique key not ideal!
  const renderedWishes = wishes.map((wish, idx) => {
     return <WishShow wish={wish} idx={idx} key={idx} editWishById={editWishById} deleteWishById={deleteWishById} />
  });
 
  return (
    <div className="wishesContainer">
      {renderedWishes}
    </div>
    
  )
}

