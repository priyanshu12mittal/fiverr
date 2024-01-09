import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to='/gigs?cat=design'>
        <div className='catCard w-64 h-80 text-white rounded-md cursor-pointer relative'>
            <img className=' w-full h-full object-cover' src={item.img} alt=''></img>
            <span className='desc font-light top-4 left-4 absolute'>{item.desc}</span>
            <span className='title font-medium text-2xl absolute left-4 top-10'>{item.title}</span>
        </div>
    </Link>
  )
}
 
export default CatCard
