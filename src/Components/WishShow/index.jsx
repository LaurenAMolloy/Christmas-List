import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


export default function WishShow( {wish, idx, editWishById, deleteWishById}) {
    console.log(wish)
    //set state to show edit form
    const[showEdit, setShowEdit] = useState();
    //Add context here!!!

    const handleDeleteClick = (id) => {
        //console.log("deleting")
        //console.log(id)
        deleteWishById(id)
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
            <button onClick={() => handleEditClick(wish.id)} className="edit"><FaEdit /></button>
            <button onClick={() => handleDeleteClick(wish.id)} className="delete"><FaTrashAlt /></button>
            <button onClick={() => handlePurchaseClick(wish.id)} className="purchased"><FaShoppingCart /></button>
        </div>
    </div>
  )
}
