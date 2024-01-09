import React from 'react'
import './Add.scss'

const Add = () => {
  return (
    <div className='add flex justify-center'>
      <div className="container w-11/12 py-12 px-0">
        <h1 className=' mb-7 text-[#808080] font-light max-w-max text-xl'>Add New Gig</h1>
        <div className="sections flex justify-between gap-24">
          <div className="left flex-1 flex flex-col gap-2 justify-between">
            <label className=' text-[#808080] text-[18px]'  htmlFor="">Title</label>
            <input
               className=' p-5'
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Category</label>
            <select className=' p-5' name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label className=' text-[#808080] text-[18px]' htmlFor="">Cover Image</label>
            <input className=' p-5' type="file" />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Upload Images</label>
            <input className=' p-5' type="file" multiple />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Description</label>
            <textarea className=' p-5' name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="30" rows="16"></textarea>
            <button className=' border-none p-5 text-white font-bold text-[18px] bg-[#1dbf73] cursor-pointer rounded-xl'>Create</button>
          </div>
          <div className="right flex-1 flex flex-col gap-2 justify-between">
            <label className=' text-[#808080] text-[18px]' htmlFor="">Service Title</label>
            <input className=' p-5' type="text" placeholder="e.g. One-page web design" />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Short Description</label>
            <textarea className=' p-5' name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label className=' text-[#808080] text-[18px]' htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input className=' p-5' type="number" />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Revision Number</label>
            <input className=' p-5' type="number" />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Add Features</label>
            <input className=' p-5' type="text" placeholder="e.g. page design" />
            <input className=' p-5' type="text" placeholder="e.g. file uploading" />
            <input className=' p-5' type="text" placeholder="e.g. setting up a domain" />
            <input className=' p-5' type="text" placeholder="e.g. hosting" />
            <label className=' text-[#808080] text-[18px]' htmlFor="">Price</label>
            <input className=' p-5' type="number" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
