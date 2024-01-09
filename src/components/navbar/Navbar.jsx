import React,{useEffect, useState} from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const {pathname} = useLocation(); 
    const isActive = ()=>{
        window.scrollY > 0?setActive(true):setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return ()=>{
            window.removeEventListener("scroll",isActive)
        }
    },[])

    const currentUser = {
        id: 1,
        username: "Anna",
        isSeller: true,
      };
    
  return (
    <div className={`navbar ${active || pathname !=="/"?(`bg-white text-black`):(`bg-[#013914] text-white`)} flex flex-col items-center sticky top-0 w-full z-50`}>
      <div className="container w-11/12 flex justify-between px-5 py-3">
        <div className="logo text-3xl font-bold">
            <Link to="/">
                <span className='text'>fiverr</span>
            </Link>
            <span className='dot text-[#1dbf73] font-bold'>.</span>
        </div>
        <div className="links flex gap-6 items-center cursor-pointer font-montserrat">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button className={` ${active ? (`bg-white text-[#1dbf73] border-[#1dbf73]`):(`border-white text-white`)}  px-5 py-1 cursor-pointer border rounded-md bg-transparent hover:bg-[#1dbf73] hover:border-[#1dbf73]`}>Join</button>}
            {currentUser && (
                <div className='user flex items-center gap-4 cursor-pointer relative' onClick={()=>setOpen(!open)}>
                    <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='user' width="32px" height="32px" className=' rounded-[100%] bg-cover'></img>
                    <span>{currentUser?.username}</span>
                    {open && <div className='options absolute top-[50px] right-0 bg-white border border-[#d3d3d3] rounded-lg flex flex-col gap-2 text-gray-500 p-5 font-light'>
                        {
                            currentUser?.isSeller && (
                                <>
                                    <Link className='link' to="/mygigs">Gigs</Link>
                                    <Link className='link' to="/add">Add New Gig</Link>
                                </>
                            )}
                            <Link className='link' to="/orders">Orders</Link>
                            <Link className='link' to="/messages">Messages</Link>
                            <Link className='link' to="/">Log out</Link>
                    </div>}
                </div>
            )}
        </div>
      </div>
    {(active || pathname !== "/") && (
        <>
        <hr className='w-full border-t border-b border-solid border-gray-300 h-0'></hr>
        <div className="menu w-11/12 p-3 flex justify-between items-center font-light text-[#808080]">
            <Link className="link menuLink" to="/">Graphics & Design</Link>
            <Link className="link menuLink" to="/">Video & Animation</Link>
            <Link className="link menuLink" to="/">Writing & Translation</Link>
            <Link className="link menuLink" to="/">AI Services</Link>
            <Link className="link menuLink" to="/">Digital Marketing</Link>
            <Link className="link menuLink" to="/">Music & Audio</Link>
            <Link className="link menuLink" to="/">Programming & Tech</Link>
            <Link className="link menuLink" to="/">Business</Link>
            <Link className="link menuLink" to="/">Lifestyle</Link>
        </div>
        <hr className='w-full border-t border-b border-solid border-gray-300 h-0'></hr>
        </> 
    )

    }
    </div>
  )
}

export default Navbar
