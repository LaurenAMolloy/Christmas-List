import React from 'react'

export default function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return column.header();
        }
        return <th key={column.label}>{column.label}</th>
    })

    //Step 1 loop over rows
    //rows data vertical
    //row data = { id: 1, name: "Keyboard", price: "59.99", link: "..." }
    //Step 2 loop over columns for this row
    //columns config horizontal
   const renderedRows = data.map((rowData) => {
    console.log(rowData);
    const renderedCells = config.map((column) => {
       return <td key={column.label}>{column.render(rowData)}</td>
    })
    return (
        <tr key={keyFn(rowData)}>
            {renderedCells}
        </tr>
    )
   })
  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                {renderedHeaders}
                </tr>
            </thead>
            <tbody>
               {renderedRows}
            </tbody>
        </table>
    </div>
  )
}
