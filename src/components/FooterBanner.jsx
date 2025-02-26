import React from 'react'

function FooterBanner() {
    return (
        <div className='bg-[url("/footer-banner.png")] h-[370px] bg-center bg-cover md:mt-0'>

            <h1 className='text-[32px] font-medium text-center text-white pt-28'>Ready to Grow Your Business?</h1>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 md:mt-16 pt-4 text-center">
                <button className='text-[20px] bg-white text-[#ed1c24] hover:text-white hover:bg-[#ed1c24] py-2 px-4 rounded-full ring-1 ring-white'>Start selling</button>
                <button className='text-[20px] text-white hover:text-[#ed1c24] hover:bg-white py-2 px-4 rounded-full ring-1 ring-white'>Chat with consultant</button>
            </div>
        </div>
    )
}

export default FooterBanner
