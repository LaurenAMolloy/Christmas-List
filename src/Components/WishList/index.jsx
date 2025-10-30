import React from 'react'
import WishShow from '../WishShow';
import { useContext } from 'react'
import  wishContext from '../../context/WishContext.jsx'

export default function WishList() {

  const { wishes } = useContext(wishContext);
  
  //For every wish in wish list render a wishShow component
  //Use the idx as the unique key not ideal!
  const renderedWishes = wishes.map((wish, idx) => {
     return <WishShow wish={wish} idx={idx} key={idx}  />
  });
 
  return (
    <div className="wishesContainer flex flex-wrap gap-2 py-5 mb-5 justify-evenly">
      {renderedWishes}
    </div>
    
  )
}

