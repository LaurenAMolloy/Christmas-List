import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../Components/Button/index.jsx'


export default function Modal({ isOpen, onClose }) {
     //Prevent Scrolling
    useEffect(() => {
        if(isOpen) {
            document.body.classList.add('overflow-hidden') 
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        })

    if(!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className="absolute inset-0 backdrop bg-gray-300 opacity-80">
            <div className="fixed inset-40 bg-white rounded flex flex-col align-center justify-center px-5">
                <p className="text-center text-lg font-medium">Do you hear sleigh bells?</p>
                    <Button 
                        onClick={onClose} 
                        primary 
                        rounded
                        className="w-full"
                        >Yes
                    </Button>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

