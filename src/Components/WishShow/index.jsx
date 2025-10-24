import React from 'react'
import { useState } from 'react'

export default function WishShow( {wish, idx}) {
    console.log(wish)
    //set state to show edit form
    const[showEdit, setShowEdit] = useState();
    //Add context here!!!

    const handleDeleteClick = () => {
        console.log("delete wish")
    }
    const handleEditClick = () => {
        console.log("edit wish")
    }
    
    const handlePurchaseClick = () => {
        console.log("purchased")
    }

    let content =   <div>
                        <h3>Wish {idx + 1}</h3>
                        <p>Name: {wish.wishName}</p>
                        <p>Price:
                            <span> £</span>{Number(wish.wishPrice)}
                        </p>
                        <p>Link:
                            <a href={wish.wishLink} target="_blank" rel="noopener noreferrer">
                                 View Product
                            </a>
                        </p>
                    </div>

return (
    <div className="wishShow" key={wish.id}>
        {content}
        <div className="actions">
            <button onClick={() => handleEditClick(wish.id)} className="edit">Edit</button>
            <button onClick={() => handleDeleteClick(wish.id)} className="delete">Delete</button>
            <button onClick={() => handlePurchaseClick(wish.id)} className="purchased">❤️</button>
        </div>
    </div>
  )
}
