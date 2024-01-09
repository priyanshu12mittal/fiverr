import React from 'react'
import './Message.scss'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message flex items-center'>
      <div className="container w-11/12 m-12">
        <span className="breadcrumbs font-light text-sm text-[#555]">
          <Link to="/messages">Messages</Link> {`> John Doe >`}
        </span>
        <div className="messages my-7 mx-0 p-12 flex flex-col gap-5 h-[500px] overflow-scroll">
          <div className="item flex gap-5 max-w-[600px] text-[18px]">
          <img className=' h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <p className=' p-5 bg-[#f4f1f1] text-[#808080] rounded-tl-2xl rounded-br-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-5 max-w-[600px] text-[18px] flex-row-reverse self-end">
          <img className=' h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <p className=' p-5 bg-[#4169e1] text-white rounded-bl-2xl rounded-tr-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-5 max-w-[600px] text-[18px]">
          <img className=' h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <p className=' p-5 bg-[#f4f1f1] text-[#808080] rounded-tl-2xl rounded-br-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-5 max-w-[600px] text-[18px] flex-row-reverse self-end">
          <img className=' h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <p className=' p-5 bg-[#4169e1] text-white rounded-bl-2xl rounded-tr-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-5 max-w-[600px] text-[18px]">
          <img className=' h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <p className=' p-5 bg-[#f4f1f1] text-[#808080] rounded-tl-2xl rounded-br-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-5 max-w-[600px] text-[18px] flex-row-reverse self-end">
          <img className=' h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <p className=' p-5 bg-[#4169e1] text-white rounded-bl-2xl rounded-tr-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr className=' h-0 border border-[#e8e6e6] mb-5'></hr>
        <div className="write flex items-center justify-between">
          <textarea className='w-10/12 h-24 p-2 border border-[#aca5a5] rounded-xl' name='' placeholder='write a message' id='' cols="30" rows="10"></textarea>
          <button className=' bg-[#1dbf73] px-3 py-3 text-white font-bold border-none rounded-xl cursor-pointer w-24'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
