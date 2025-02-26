import React from 'react'

function BannerHeading() {
  return (
    <div>
      <h1 className='max-w-[1320px] mx-auto text-center font-bold text-[32px] px-52 py-14'>1mdm.com is a leading ecommerce platform that helps SMEs to go global</h1>


      <div className='max-w-[1320px] mx-auto flex flex-row pb-28'>
        <div className="w-1/2 px-3">
          <iframe
            className="w-full h-[370px]"
            src="https://www.youtube.com/embed/TN7iJyc5Uks"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/2 px-3 pt-20">
          <h4 className='py-5'>Connect with millions of business buyers from around the world.</h4>
          <h4 className='py-5'>Get the tools and know-how to build a successful ecommerce presence for your business.</h4>
          <h4 className='py-5'>Pocket more from each sale, with take rates as low as 0% in some cases.</h4>
        </div>
      </div>
    </div>


  )
}

export default BannerHeading
