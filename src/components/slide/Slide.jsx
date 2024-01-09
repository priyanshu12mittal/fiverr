import React from 'react'
import './Slide.scss'
import Slider from "infinite-react-carousel";

const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className=' slide flex justify-center px-5 mt-5'>
      <div className="container w-11/12 relative">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
        </Slider>
      </div>
    </div>
  )
}
 
export default Slide
