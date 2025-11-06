import React from 'react'
import SortableTable from '../../components/SortableTable'
import { useContext } from 'react'
import wishContext from '../../context/WishContext'

export default function TablePage() {
  const { wishes } = useContext(wishContext);

  const config = [
    {
      label:"Name",
      render: (wish) => wish.wishName,
      sortValue: (wish) => wish.wishName,
    },
    {
      label:"Price",
      render: (wish) => wish.wishPrice,
      sortValue: (wish) => wish.wishPrice,
    },
    {
      label:"Link",
      //Custom rendering
      render: (row) => <a href={row.wishLink} target="_blank" rel="noopener noreferrer">View</a>,
      header: () => {
        return <th className="bg-blue-500">Link</th>
      }
    },
  ];

  const keyFn = (wish) => {
    return wish.wishName
  }
  return (
    <div>
    
    <SortableTable data={wishes} config={config} keyFn={keyFn} />
    </div>
  )
}
