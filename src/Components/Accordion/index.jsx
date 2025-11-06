import React from 'react'
import  { useWish } from '../../context/WishContext.jsx'

export default function Accordion() {
    const { expanded, setExpanded } = useWish();


    //data to be displayed in the accordion
    const items = [
        { label: "Does Santa exist?", content: "Of course he does! 🎅" },
        { label: "Is Rudolph real?", content: "Rudolph is real in spirit! 🦌" },
        { label: "Should we open gifts early?", content: "Never! Wait for Christmas morning. 🎁" }
    ]

    const handleOnClick = (nextIndex) => {
        console.log(nextIndex)
        setExpanded((current) => {
            //close drop down
            if(current === nextIndex){
                return -1
            } else {
                return nextIndex
            }
        })
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expanded;
        
    const icon = <span className="text-4xl">{!isExpanded ? "+" : "-"}</span>

        return (
            <div  key={index}>
            <div 
            className="accordion-label flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"  
            onClick={() => handleOnClick(index)}
            role="button"
            aria-expanded={isExpanded}
            >
                {item.label}
                {icon} 
            </div>

            {isExpanded && (
               <div 
               className="p-5"
               >
                {item.content}
                </div>
            )}
           </div> 
        )
    })
      
  return (
    <div className="accordion-container border-x border-t rounded">
        <h1 className="p-3 font-bold text-xl">FAQ</h1>
        {renderedItems}
    </div>
  )
}
