import React from 'react'
import './TrustedBy.scss'

const TrustedBy = () => {
  return (
    <div className='trustedBy bg-[#fafafa] h-24 flex justify-center items-center'>
        <div className="container w-11/12 flex gap-5 items-center text-gray-500 font-medium justify-center">
            <span>Trusted by :</span>
            <img className=' h-20 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
            <img className=' h-20 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
            <img className=' h-20 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
            <img className=' h-20 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
            <img className=' h-20 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
        </div>
    </div>
  )
}

export default TrustedBy
