import React from 'react'
import './Orders.scss'
import del from '../../img/message.png'

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  return (
    <div className='orders flex justify-center'>
      <div className="container w-11/12 py-12 px-0">
        <div className="title flex justify-between mb-3">
          <h1 className=' font-bold text-2xl'>Orders</h1>
        </div>
        <table className=' w-full even:bg-[#1dbf730f]'>
          <tr className=' h-12'>
            <th className=' text-left'>Image</th>
            <th className=' text-left'>Title</th>
            <th className=' text-left'>Price</th>
            <th className=' text-left'>{currentUser?.isSeller ?"Buyer":"Seller"}</th>
            <th className=' text-left'>Contact</th>
          </tr>
          <tr className=' h-12'>
            <td>
              <img className="image w-12 h-6 object-cover" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup className=' text-sm'>99</sup></td>
            <td>13</td>
            <td>
              <img className="delete w-12 h-6 object-cover" src={del} alt="" />
            </td>
          </tr>
          <tr className=' h-12'>
            <td>
              <img className="image w-12 h-6 object-cover"src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            </td>
            <td>Ai generated concept art</td>
            <td>120.<sup className=' text-sm'>99</sup></td>
            <td>41</td>
            <td>
              <img className="delete w-12 h-6 object-cover" src={del} alt="" />
            </td>
          </tr>
          <tr className=' h-12'>
            <td>
              <img className="image w-12 h-6 object-cover"src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            </td>
            <td>High quality digital character</td>
            <td>79.<sup className=' text-sm'>99</sup></td>
            <td>55</td>
            <td>
              <img className="delete w-12 h-6 object-cover" src={del} alt="" />
            </td>
          </tr>
          <tr className=' h-12'>
            <td>
              <img className="image w-12 h-6 object-cover"src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>119.<sup className=' text-sm'>99</sup></td>
            <td>29</td>
            <td>
              <img className="delete w-12 h-6 object-cover" src={del} alt="" />
            </td>
          </tr>
          <tr className=' h-12'>
            <td>
              <img className="image w-12 h-6 object-cover"src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            </td>
            <td>Original ai generated digital art</td>
            <td>59.<sup className=' text-sm'>99</sup></td>
            <td>34</td>
            <td>
              <img className="delete w-12 h-6 object-cover" src={del} alt="" />
            </td>
          </tr>
          <tr className=' h-12'>
            <td>
              <img className="image w-12 h-6 object-cover"src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
            </td>
            <td>Text based ai generated art</td>
            <td>110.<sup className=' text-sm'>99</sup></td>
            <td>16</td>
            <td>
              <img className="delete w-12 h-6 object-cover" src={del} alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
