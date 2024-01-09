import React, { useState } from 'react'
import './Gigs.scss'
import down from '../../img/down.png'
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data'
const Gigs = () => {

  const [open,setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) =>{
    setSort(type);
    setOpen(false); 
  }

  return (
    <div className='gigs flex justify-center w-full'>
      <div className="container w-11/12 py-7 px-0 flex flex-col gap-4">
        <span className='breadcrumbs font-light text-sm text-[#555]'>{`Liverr > Graphics & Design >`}</span>
        <h1 className=' text-3xl text-[#222325] font-bold'>AI Artists</h1>
        <p className=' font-light text-[#999]'>Explore the boundaries of art and technology with Fiverr's AI artists</p>
        <div className="menu flex justify-end items-center mb-5">
          <div className="left flex items-center gap-3 text-[#555] font-light">
            <span>Budget</span>
            <input className=' p-1 border border-[#d3d3d3] rounded-md outline-none placeholder:text-[#999]' type="number" placeholder="min" />
            <input className=' p-1 border border-[#d3d3d3] rounded-md outline-none placeholder:text-[#999]' type="number" placeholder="max" />
            <button className=' py-2 px-4 bg-[#1dbf73] text-white border-none font-medium rounded-md cursor-pointer'>Apply</button>
          </div>
          <div className="right flex items-center gap-2 relative">
            <span className='sortBy text-[#555] font-light'>Sort by</span>
            <span className='sortType font-medium'>{sort === "sales"?"Best Selling":"Newest"}</span>
            <img className=' w-4 cursor-pointer' src={down} onClick={()=>setOpen(!open)}></img>
            {open && <div className="rightMenu p-3 bg-white rounded-md border border-[#d3d3d3] absolute top-7 right-0 z-10 flex flex-col gap-5 text-[#555]">
              {sort === "sales" ? (
                <span onClick={()=>reSort("createdAt")} className=' cursor-pointer'>Newest</span>
              ):(
                <span onClick={()=>reSort("sales")} className=' cursor-pointer'>Best Selling</span>
              )}
            </div>}
          </div>
        </div>
        <div className="cards flex flex-wrap justify-between ">
          {
            gigs.map(gig=>(
              <GigCard key={gig.id} item={gig}></GigCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Gigs
