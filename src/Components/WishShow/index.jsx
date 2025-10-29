import React from 'react'
import { useState, useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import EditWish from '../EditWish';
import Button from '../Button/index.jsx';
import wishContext from '../../context/WishContext';


export default function WishShow( {wish, idx }) {
    console.log(wish)
    //set state to show edit form
    const[showEdit, setShowEdit] = useState(false);

    //Add context here!!!
    const { deleteWishById } = useContext(wishContext)

    const handleDeleteClick = (id) => {
        deleteWishById(id)
    }
    const handleEditClick = () => {
        //console.log("edit wish", {id})
        //show the edit form 
        setShowEdit(prev => !prev)
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
                            <a className="text-blue-400" href={wish.wishLink} target="_blank" rel="noopener noreferrer">
                                 View Product
                            </a>
                        </p>
                    </div>
    if(showEdit) {
        content = <EditWish wish={wish} onSubmit={handleEditClick} />
    }

return (
    <div className="wishShow" key={wish.id}>
        {content}
        <div className="actions">
            <Button outline primary onClick={() => handleEditClick(wish.id)} className="edit"><FaEdit /></Button>
            <Button outline danger onClick={() => handleDeleteClick(wish.id)} className="delete"><FaTrashAlt /></Button>
            <Button outline success onClick={() => handlePurchaseClick(wish.id)} className="purchased"><FaShoppingCart /></Button>
        </div>
    </div>
  )
}
