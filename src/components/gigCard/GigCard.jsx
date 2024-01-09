import React from 'react'
import './GigCard.scss'
import { Link } from 'react-router-dom'
import star from '../../img/star.png'
import heart from '../../img/heart.png'

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123">
        <div className='gigCard w-80 h-86 border border-[#e4e4e4] mb-10 rounded-md'>
            <img className=' w-full h-[50%] object-cover rounded-md' src={item.img}></img>
            <div className='info py-2 px-5 flex flex-col gap-2'>
                <div className="user flex items-center gap-2">
                    <img className=' w-7 h-7 object-cover rounded-[50%]' src={item.pp}></img>
                    <span>{item.username}</span>
                </div>
                <p className=' text-[#111]'>{item.desc}</p>
                <div className="star flex items-center gap-1">
                    <img className=' w-4 h-4' src={star}></img>
                    <span className=' font-bold text-[#ffc108] text-sm'>{item.star}</span>
                </div>
            </div>
            <hr className=' h-0 border border-[#e4e4e4]'></hr>
            <div className="details py-1 px-5 flex items-center justify-between">
                <img className=' w-4 h-4 cursor-pointer object-cover' src={heart}></img>
                <div className="price flex justify-center gap-1">
                    <span className=' text-[#999] text-[16px]'>From</span>
                    <h2 className=' text-[16px] font-normal text-end text-[#555]'>$ {item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
    
  )
}

export default GigCard
