import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import {cards,projects} from '../../data'
import video from '../../img/video.mp4'
import check from '../../img/check.png'
import En from '../../img/EN.webp'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
const Home = () => {
  return (
    <div className='home'>
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card)=>(
          <CatCard key={card.id} item={card}></CatCard>
        ))}
      </Slide>
      <div className="features bg-[#f1fdf7] flex justify-center py-24">
        <div className="container flex w-11/12 items-center gap-6">
          <div className="item flex-2/5 gap-6 flex-col">
            <h1 className=' font-medium mb-3 text-2xl text-[#404145]'>A whole world of freelance talent at your fingertips</h1>
            <div className="title flex items-center gap-3 font-medium text-xl m-1">
              <img className=' w-6 h-6' src={check}></img>
              <p className=' text-[#404145]'>The best for every budget</p>
            </div>
            <p className=' text-base font-light text-[#62646a] tracking-wide'>Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title flex items-center gap-3 font-medium text-xl m-1">
              <img className=' w-6 h-6' src={check} alt="" /> 
              <p className=' text-[#404145]'>Quality work done quickly</p>
            </div>
            <p className=' text-base font-light text-[#62646a] tracking-wide'>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title flex items-center gap-3 font-medium text-xl m-1">
              <img className=' w-6 h-6' src={check} alt="" />
              <p className=' text-[#404145]'>Protected payments, every time</p>
            </div>
            <p className=' text-base font-light text-[#62646a] tracking-wide'>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title flex items-center gap-3 font-medium text-xl m-1">
              <img className=' w-6 h-6' src={check} alt="" />
              <p className=' text-[#404145]'>24/7 support</p>
            </div>
            <p className=' text-base font-light text-[#62646a] tracking-wide'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item flex-3/5">
            <video src={video} controls></video>
          </div>
        </div>
      </div>
      
      
      <div className="features bg-[#0d084d] flex justify-center py-24 text-white">
        <div className="container flex w-11/12 items-center gap-6">
          <div className="item flex flex-col items-start gap-3">
          <h1 className=' text-4xl'>fiverr <i className=' font-light'>business</i></h1>
            <h1 className=' text-2xl'>A business solution designed for <i>teams</i></h1>
            <p className=' mb-5 text-xl'>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title text-white font-light text-[18px] flex gap-3 m-1">
              <img className=' w-6 h-6' src={check}></img>
              <p>Connect to freelancers with proven business experience</p>
            </div>
            <div className="title text-white font-light text-[18px] flex gap-3 m-1">
              <img className=' w-6 h-6' src={check}></img>
              <p>Get matched with the perfect talent by a customer success manager</p>
            </div>
            <div className="title text-white font-light text-[18px] flex gap-3 m-1">
              <img className=' w-6 h-6' src={check}></img>
              <p>Manage teamwork and boost productivity with one powerful workspace</p>
            </div>
            <button className=' bg-[#1dbf73] border-none px-3 py-2 rounded-lg mt-5 cursor-pointer text-[16px]'>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img className='w-[566px] h-[356px]' src={En}></img>
          </div>
        </div>
      </div>

      <div className='bg-[#e1e1e1] p-3'>
        <Slide slidesToShow={4} arrowsScroll={4} className="">
          {projects.map((card)=>(
            <ProjectCard key={card.id} item={card}></ProjectCard>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default Home
