import React from 'react'
import './Featured.scss'
import man from '../../img/man.png'
import searchImg from '../../img/search.png'
const Featured = () => {
  return (
    <div>
      <div className="featured h-96 flex justify-center bg-[#013914] text-white">
        <div className="container w-11/12 flex items-center justify-between">
            <div className="left flex flex-col gap-4 w-[60%]">
                <h1 className=' text-5xl'>Find the perfect <i className=' font-light'>freelance</i> services for your business</h1>
                <div className="search flex items-center justify-between bg-white rounded-xl">
                    <div className="searchInput flex items-center gap-3">
                        <img className=' m-2' src={searchImg} width="20px" height="20px"></img>
                        <input type='text' placeholder='Try "building mobile app"' className=' outline-none border-none'></input>
                    </div>
                    <button className=' w-28 h-12 border-none bg-[#1dbf73] text-white self-end cursor-pointer rounded-e-lg'>Search</button>
                </div>
                <div className="popular flex items-center gap-3">
                    <span className=''>Popular :</span>
                    <button className=' text-white bg-transparent border border-white p-1 px-3 rounded-full inline-block text-sm'>Web Design</button>
                    <button className=' text-white bg-transparent border border-white p-1 px-3 rounded-full inline-block text-sm'>WordPress</button>
                    <button className=' text-white bg-transparent border border-white p-1 px-3 rounded-full inline-block text-sm'>Logo Design</button>
                    <button className=' text-white bg-transparent border border-white p-1 px-3 rounded-full inline-block text-sm'>AI Services</button>
                </div>
            </div>
            <div className="right h-full">
                <img className=' h-full object-contain' src={man}></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
