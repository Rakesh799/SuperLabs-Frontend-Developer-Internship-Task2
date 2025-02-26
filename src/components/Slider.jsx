import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    text: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
    img: "/slider-1.webp",
  },
  {
    id: 2,
    text: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
    img: "/slider-2.webp",
  },
  {
    id: 3,
    text: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
    img: "/slider-3.webp",
  },
  {
    id: 4,
    text: "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
    img: "/slider-4.webp",
  },
];

const Slider = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container max-w-[1320px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Success stories from 1mdm.com sellers
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex h-[600px]">
                <div className="w-full md:w-[40%] p-4 pt-28">
                  <i className="text-6xl text-red-500 mb-4">❝</i>
                  <p className="text-black text-[17px]">{slide.text}</p>
                </div>
                <div className="md:w-[60%] flex justify-center">
                  <img src={slide.img} alt="1mdm-product" className="w-[800px] rounded-lg bg-cover bg-center" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;