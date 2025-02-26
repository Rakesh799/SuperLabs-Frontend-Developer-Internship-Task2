import React from 'react'
import logowhite from '../assets/logowhite.png'


function FooterSection() {
  return (
    <div className='bg-black text-white'>
      <div className='max-w-[1320px] mx-auto py-16 flex flex-row'>

        <div className='w-[45%]'>
          <img src={logowhite} alt="1mdm Logo" />
          <h5 className='text-[#BBBBBB] py-6'>One Medical Devicesbr <br />
            Market Place</h5>
        </div>

        <div className="w-[55%] flex flex-row">
          <div className="w-1/3">
            <ul className='text-[#BBBBBB] text-[16px]'>
              <h5 className='text-white font-bold text-[20px] pb-4'>Platform</h5>
              <li className='py-2'>Sell on 1MDM</li>
              <li className='py-2'>Pricing</li>
              <li className='py-2'>About us</li>
              <li className='py-2'>Our Story</li>
              <li className='py-2'>Careers</li>
              <li className='py-2'>Blog</li>
              <li className='py-2'>Brands</li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul className='text-[#BBBBBB] text-[16px]'>
              <h5 className='text-white font-bold text-[20px] pb-4'>Press Room</h5>
              <li className='py-2'>Images & B-roll</li>
            </ul>
            <ul className='text-[#BBBBBB] text-[16px]'>
              <h5 className='text-white font-bold text-[20px] pb-4'>Policies</h5>
              <li className='py-2'>Terms of Service</li>
              <li className='py-2'>Privacy Policy</li>
              <li className='py-2'>Delivery Information</li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul className='text-[#BBBBBB] text-[16px]'>
              <h5 className='text-white font-bold text-[20px] pb-4'>Reach Us</h5>
              <li className='py-2'>Corporate Information</li>
              <li className='py-2'>Contact us</li>
            </ul></div>
        </div>

      </div>
    </div>
  )
}

export default FooterSection
