import React from 'react'
import { popularDishes } from '../../constants'

const PopularDishes = () => {
    return (
        <div className='mt-6 pr-6'>
            <div className='bg-[#1a1a1a] w-full rounded-lg'>
                <div className='flex justify-between items-center px-6 py-4'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Popular Dishes</h1>
                    <a href="" className='text-[#025cca] text-sm font-semibold'>View all</a>
                </div>
                <div className='overflow-y-scroll h-[585px] scrollbar-hide'>
                    {
                        popularDishes.map((dish) => {
                            return (
                                <div key={dish?.id} className='flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] mt-4 px-6 py-4 mx-6'>
                                    <h1 className='text-[#f5f5f5] font-semibold text-xl mr-4'>{dish?.id < 10 ? `0${dish?.id}` : dish?.id}</h1>
                                    <img src={dish.image} alt={dish.name} className='h-12 w-12 rounded-full object-cover' />
                                    <div className='flex flex-col items-start'>
                                        <h1 className='text-[#f5f5f5] text-base font-semibold tracking-wide'>{dish.name}</h1>
                                        <p className='text-[#f5f5f5] text-xs font-medium mt-1'>
                                            <span className='text-[#ababab]'>orders: </span>
                                            {dish.numberOfOrders}
                                        </p>
                                    </div>
                                    {/* <h1 className='ml-auto text-[#f6b100] font-semibold text-sm'>${dish.price}</h1> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularDishes
