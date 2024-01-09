import React from 'react'
import './Messages.scss'
import del from '../../img/message.png'
import { Link } from 'react-router-dom'

const Messages = () => {

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className='messages flex justify-center'>
      <div className="container w-11/12 py-12 px-0">
        <div className="title flex justify-between mb-3">
          <h1 className=' font-bold text-2xl'>Messages</h1>
        </div>
        <table className=' w-full'>
          <tr className=' h-24'>
            <th className=' text-left'>{currentUser?.isSeller ?"Buyer":"Seller"}</th>
            <th className=' text-left'>Last Message</th>
            <th className=' text-left'>Date</th>
            <th className=' text-left'>Action</th>
          </tr>
          <tr className='active h-24 bg-[#1dbf730f]'>
          <td className='font-bold'>Charley Sharp</td>
            <td className=' text-[#808080]'>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className=' text-[#808080]'>1 hour ago</td>
            <td>
              <button className=' bg-[#1dbf73] text-white font-bold border-none p-2 rounded-md cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='active h-24 bg-[#1dbf730f]'>
            <td className='font-bold'>John Doe</td>

            <td className=' text-[#808080]'>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className=' text-[#808080]'>2 hours ago</td>
            <td>
              <button className=' bg-[#1dbf73] text-white font-bold border-none p-2 rounded-md cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className=' h-24'>
          <td className='font-bold'>Elinor Good</td>
            <td className=' text-[#808080]'>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className=' text-[#808080]'>1 day ago</td>
          </tr>
          <tr className=' h-24'>
            <td className='font-bold'>Garner David </td>
            <td className=' text-[#808080]'>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className=' text-[#808080]'>2 days ago</td>
          </tr>
          <tr className=' h-24'>
            <td className='font-bold'>Troy Oliver</td>
            <td className=' text-[#808080]'>{message.substring(0, 100)}</td>
            <td className=' text-[#808080]'>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
