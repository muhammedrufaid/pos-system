import React from 'react'
import { FaCheckDouble } from 'react-icons/fa'
import { getRandomBG } from '../../utils'

const TableCard = ({ key, name, status, initials }) => {
  return (
    <div key={key} className=' bg-[#262626] p-4 rounded-lg hover:bg-[#2c2c2c]  cursor-pointer'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-[#f5f5f5] text-lg font-semibold'>{name}</h1>
        <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg `}>
          {status}
        </p>
      </div>
      <div className='flex items-center justify-center my-4'>
        <h1 className='text-white rounded-full p-5 text-xl' style={{ backgroundColor: getRandomBG() }}>{initials}</h1>
      </div>
    </div>
  )
}

export default TableCard
