import React from 'react'
import { deleteTickets, getTickets } from '../services/httpverbs'

const Tickets = () => {

  const tickets = getTickets()

  const handleDeleteTickets = (id) =>{
    deleteTickets(id)
  }
  return (
    <div className='flex flex-col justify-center gap-y-4 py-3 w-[480px]'>
      <h1 className='text-xl font-bold text-center'>Currents Tickets</h1>
      {
        tickets.map((item) => (
          <div key={item.id} className='bg-white p-7 rounded-lg shadow-md flex flex-col gap-y-3'>
            <h2 className={`text-base font-semibold ${item.done ? 'line-through' : ''}`}>{item.title}</h2>
              <p className={`text-sm ${item.done ? 'line-through' : ''}`} >{item.description}</p>
            <div className='flex items-start justify-between'>
              <span className='px-2 uppercase text-sm font-semibold text-gray-50 rounded-3xl bg-gray-500'>{item.priority === 1 ? 'p1' : item.priority === 2 ? 'p2' : 'p3' }</span>
              <button 
                onClick={()=>handleDeleteTickets(item.id)}
                className='py-2 px-4 rounded-full font-semibold text-sm text-gray-50 bg-orange-400 hover:bg-orange-500 transition-colors hover:shadow-md'>Delet</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Tickets
