import React from 'react'
import './ProjectCard.scss'
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
  return (
    <Link to='/'>
        <div className='ProjectCard w-64 h-80 rounded-md cursor-pointer relative border-[#e1e1e1] p-5'>
            <img className=' w-full h-[70%] object-cover' src={item.img} alt=''></img>
            <div className="info flex items-center gap-5 p-4">
                <img className=' w-10 h-10 object-cover rounded-[50%]' src={item.pp}></img>
                <div className="texts">
                    <h2 className=' text-sm font-medium'>{item.cat}</h2>
                    <span className=' text-sm font-light'>{item.username}</span>
                </div>
            </div>
        </div>
    </Link>
  )
}
 
export default ProjectCard
