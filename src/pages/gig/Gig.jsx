import React from 'react'
import './Gig.scss'
import star from '../../img/star.png'
import { Slider } from 'infinite-react-carousel'
import like from '../../img/like.png'
import dislike from '../../img/dislike.png'
import clock from '../../img/clock.png'
import recycle from '../../img/recycle.png'
import greencheck from '../../img/greencheck.png'

const Gig = () => {
  return (
    <div className='gig flex justify-center'>
      <div className="container w-11/12 py-8 flex gap-12">
        <div className="left flex flex-col gap-5">
          <span className="breadCrumbs font-light uppercase text-sm text-[#555]">{`Liverr > Graphics & Design >`}</span>
          <h1 className=' text-2xl font-bold'>I will create ai generated art for you</h1>
          <div className='user flex items-center gap-3'>
            <img className=' w-8 h-8 rounded-[50%] object-cover' src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
            <span className=' text-sm font-medium'>Anna Bell</span>
            <div className="stars flex items-center gap-1">
              <img className=' w-4 h-4' src={star}></img>
              <img className=' w-4 h-4' src={star}></img>
              <img className=' w-4 h-4' src={star}></img>
              <img className=' w-4 h-4' src={star}></img>
              <img className=' w-4 h-4' src={star}></img>
              <span className=' text-[16px] font-bold text-[#ffc108]'>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider bg-[#F5F5F5]">
            <img className=' max-h-[400px]  object-contain' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <img className=' max-h-[400px] object-contain' src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            <img className=' max-h-[400px] object-contain' src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
          </Slider>
          <h2 className=' font-normal text-xl'>About This Gig</h2>
          <p className=' text-[#555] text-sm font-light'>I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller mt-12 flex flex-col gap-5">
            <h2 className=' text-xl font-light'>About The Seller</h2>
            <div className="user flex items-center gap-5">
              <img className=' w-24 h-24 object-cover rounded-full' src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
              <div className="info flex flex-col gap-2">
                <span className=' text-sm font-medium'>Anna Bell</span>
                <div className="stars flex items-center gap-1">
                  <img className=' w-4 h-4' src={star}></img>
                  <img className=' w-4 h-4' src={star}></img>
                  <img className=' w-4 h-4' src={star}></img>
                  <img className=' w-4 h-4' src={star}></img>
                  <img className=' w-4 h-4' src={star}></img>
                  <span className=' text-[16px] font-bold text-[#ffc108]'>5</span>
                </div>
                <button className=' bg-white p-3 rounded-md border border-[#808080] hover:bg-[#808080]'>Contact Me</button>
              </div>
            </div>
            <div className="box border border-[#d3d3d3] rounded-md p-5 mt-5 w-[600px]">
              <div className="items flex justify-between flex-wrap">
                <div className="item flex flex-col gap-2 mb-4 w-28">
                  <span className="title font-light">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item flex flex-col gap-2 mb-4 w-28">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item flex flex-col gap-2 mb-4 w-28">
                  <span className="title font-light">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item flex flex-col gap-2 mb-4 w-28">
                  <span className="title font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item flex flex-col gap-2 mb-4 w-28">
                  <span className="title font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className=' h-0 border border-gray-400'></hr>
                <p className='text-[#555] text-sm font-light mt-1'>
                  My name is Anna, I enjoy creating AI generated art in my spare
                  time. I have a lot of experience using the AI program and that
                  means I know what to prompt the AI with to get a great and
                  incredibly detailed result.
                </p>
            </div>
          </div>
          <div className="reviews mt-12">
            <h2 className=' text-xl font-light'>Reviews</h2>
            <div className="item flex flex-col gap-5 my-5">
              <div className="user flex items-center gap-1">
                <img
                  className="pp w-12 h-12 rounded-full object-cover"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country flex items-center gap-2 text-[#808080]">
                    <img
                      className=' w-5'
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center gap-1">
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <span className=' text-[16px] font-bold text-[#ffc108]'>5</span>
              </div>
              <p className=' text-sm text-[#808080] font-light'>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-2">
                <span className=' font-medium'>Helpful?</span>
                <img className=' w-4' src={like} alt="" />
                <span>Yes</span>
                <img className=' w-4' src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className=' h-0 border border-gray-400'></hr>
            <div className="item flex flex-col gap-5 my-5">
              <div className="user flex items-center gap-1">
                <img
                  className="pp w-12 h-12 rounded-full object-cover"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country flex items-center gap-2 text-[#808080]">
                    <img
                      className=' w-5'
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center gap-1">
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <span className=' text-[16px] font-bold text-[#ffc108]'>5</span>
              </div>
              <p className=' text-sm text-[#808080] font-light'>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-2">
                <span className=' font-medium'>Helpful?</span>
                <img className=' w-4' src={like} alt="" />
                <span>Yes</span>
                <img className=' w-4' src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className=' h-0 border border-gray-400'></hr>
            <div className="item flex flex-col gap-5 my-5">
              <div className="user flex items-center gap-1">
                <img
                  className="pp w-12 h-12 rounded-full object-cover"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country flex items-center gap-2 text-[#808080]">
                    <img
                      className=' w-5'
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center gap-1">
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <img className=' w-4 h-4' src={star}></img>
                <span className=' text-[16px] font-bold text-[#ffc108]'>5</span>
              </div>
              <p className=' text-sm text-[#808080] font-light'>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-2">
                <span className=' font-medium'>Helpful?</span>
                <img className=' w-4' src={like} alt="" />
                <span>Yes</span>
                <img className=' w-4' src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right border border-[#d3d3d3] p-5 rounded-md flex flex-col gap-5 h-max max-h-[500px] sticky top-36">
          <div className="price flex items-center justify-between">
            <h3 className=' font-bold'>1 AI generated image</h3>
            <h2 className=' font-light'>$ 59.99</h2>
          </div>
          <p className=' text-[#808080] my-2 mx-0'>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details flex items-center justify-between text-sm">
          <div className="item flex items-center gap-2">
              <img className=' w-5' src={clock} alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item flex items-center gap-2">
              <img className=' w-5' src={recycle} alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item flex items-center gap-2 font-light text-[#808080] mb-1">
              <img className=' w-4' src={greencheck} alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item flex items-center gap-2 font-light text-[#808080] mb-1">
              <img className=' w-4' src={greencheck} alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item flex items-center gap-2 font-light text-[#808080] mb-1">
              <img className=' w-4' src={greencheck} alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item flex items-center gap-2 font-light text-[#808080] mb-1">
              <img className=' w-4' src={greencheck} alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className=' bg-[#1dbf73] p-3 text-white font-bold border-none text-[18px]'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
