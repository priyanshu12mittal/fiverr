import React from 'react'
import './Footer.scss'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook.png'
import linkedin from '../../img/linkedin.png'
import pinterest from '../../img/pinterest.png'
import instagram from '../../img/instagram.png'
import language from '../../img/language.png'
import coin from '../../img/coin.png'
import accessibility from '../../img/accessibility.png'

const Footer = () => {
  return (
    <div className='footer flex justify-center text-[#999] mt-12 mb-0'>
      <div className="continer w-11/12">
        <div className="top flex justify-between">
          <div className="item flex flex-col gap-5">
            <h2 className=' text-[16px] text-[#555]'>Categories</h2>
            <span className=' font-light'>Graphics & Design</span>
            <span className=' font-light'>Digital Marketing</span>
            <span className=' font-light'>Writing & Translation</span>
            <span className=' font-light'>Video & Animation</span>
            <span className=' font-light'>Music & Audio</span>
            <span className=' font-light'>Programming & Tech</span>
            <span className=' font-light'>Data</span>
            <span className=' font-light'>Business</span>
            <span className=' font-light'>Lifestyle</span>
            <span className=' font-light'>Photography</span>
            <span className=' font-light'>Sitemap</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className=' text-[16px] text-[#555]'>About</h2>
            <span className=' font-light'>Press & News</span>
            <span className=' font-light'>Partnerships</span>
            <span className=' font-light'>Privacy Policy</span>
            <span className=' font-light'>Terms of Service</span>
            <span className=' font-light'>Intellectual Property Claims</span>
            <span className=' font-light'>Investor Relations</span>
            <span className=' font-light'>Contact Sales</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className=' text-[16px] text-[#555]'>Support</h2>
            <span className=' font-light'>Help & Support</span>
            <span className=' font-light'>Trust & Safety</span>
            <span className=' font-light'>Selling on Fiverr</span>
            <span className=' font-light'>Buying on Fiverr</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className=' text-[16px] text-[#555]'>Community</h2>
            <span className=' font-light'>Customer Success Stories</span>
            <span className=' font-light'>Community hub</span>
            <span className=' font-light'>Forum</span>
            <span className=' font-light'>Events</span>
            <span className=' font-light'>Blog</span>
            <span className=' font-light'>Influencers</span>
            <span className=' font-light'>Affiliates</span>
            <span className=' font-light'>Podcast</span>
            <span className=' font-light'>Invite a Friend</span>
            <span className=' font-light'>Become a Seller</span>
            <span className=' font-light'>Community Standards</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className=' text-[16px] text-[#555]'>More From Fiverr</h2>
            <span className=' font-light'>Fiverr Business</span>
            <span className=' font-light'>Fiverr Pro</span>
            <span className=' font-light'>Fiverr Logo Maker</span>
            <span className=' font-light'>Fiverr Guides</span>
            <span className=' font-light'>Get Inspired</span>
            <span className=' font-light'>Fiverr Select</span>
            <span className=' font-light'>ClearVoice</span>
            <span className=' font-light'>Fiverr Workspace</span>
            <span className=' font-light'>Learn</span>
            <span className=' font-light'>Working Not Working</span>
          </div>
        </div>
        <hr className=' mt-12 mb-0 h-0 border border-[#ebe9e9]'></hr>
        <div className="bottom flex items-center justify-between mt-4 mb-4 cursor-pointer">
          <div className="left flex items-center gap-5">
            <h2>Fiverr</h2>
            <span className=' text-sm'>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right flex items-center gap-7">
            <div className="social flex gap-5">
              <img className=' w-6 h-6' src={twitter} alt="" />
              <img className=' w-6 h-6' src={facebook} alt="" />
              <img className=' w-6 h-6' src={linkedin} alt="" />
              <img className=' w-6 h-6' src={pinterest} alt="" />
              <img className=' w-6 h-6' src={instagram} alt="" />
            </div>
            <div className="link flex items-center gap-2">
              <img className=' w-6 h-6' src={language} alt="" />
              <span>English</span>
            </div>
            <div className="link flex items-center gap-2">
              <img className=' w-6 h-6' src={coin} alt="" />
              <span>USD</span>
            </div>
            <img className=' w-6 h-6' src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
