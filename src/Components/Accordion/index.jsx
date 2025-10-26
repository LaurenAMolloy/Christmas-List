import React from 'react'

export default function Accordion( {expanded, setExpanded }) {
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



    //map over items
    //compare index to state
    //use is expanded to decide if this is open or not!
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expanded;
        //console.log("index",index);
        //console.log("expanded", expanded);
        //console.log(isExpanded);

        return (
            <div key={index}>
            <div onClick={() => {handleOnClick(index)}}>{item.label}</div>
            {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
      
  return (
    <div>
        <h1>Frequently Asked Questions</h1>
        {renderedItems}
    </div>
  )
}
