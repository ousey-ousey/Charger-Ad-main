'use client';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  name: string;
  image: string;
  feedback: string;
  rating: number;
}

const feedbacks: Testimonial[] = [
  {
    name: 'kolas Johnson',
    image: 'https://i.pinimg.com/474x/71/80/1c/71801c22a45e3bc0f714705ed49cbc9e.jpg',
    feedback: "The Bamboo Toothbrushes are a game-changer! Great quality and sustainable. My oral care routine just got greener. Kudos for fantastic eco-friendly products!",
    rating: 5,
  },
  {
    name: 'Mark Anderson',
    image: 'https://i.pinimg.com/474x/67/dd/33/67dd333696cf3b13702f83e97e16167d.jpg',
    feedback: "The Bamboo Toothbrushes are a game-changer! Great quality and sustainable. My oral care routine just got greener. Kudos for fantastic eco-friendly products!",
    rating: 4.5,
  },
  {
    name: 'nouy dou Lee',
    image: 'https://i.pinimg.com/474x/da/f6/25/daf6258d000b318a59ae285905bf8e19.jpg',
    feedback: "The Bamboo Toothbrushes are a game-changer! Great quality and sustainable. My oral care routine just got greener. Kudos for fantastic eco-friendly products!",
    rating: 5,
  },
];

export default function FeedbackSection() {
  const sliderRef = React.useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
        {
          breakpoint: 1024, // Tablets
          settings: {
            slidesToShow: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 768, // Mobile
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
    ],
    afterChange: (current: number) => setActiveIndex(current),
    appendDots: (dots: string) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-4 mt-10 p-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer mt-4 transition-all ${
          i === activeIndex
            ? "bg-[#2EC5A7] border-2 border-[#2EC5A7]"
            : "bg-gray-300 border border-transparent"
        }`}
      />
    ),
  };

  return (
    <section className="w-full py-24 bg-[#FFF7ED] mb-20 md:mb-32 relative">
      <h2 className="text-center text-4xl text-[#3E2723] font-bold text-brown-800 mb-10">
        آراء عملائنا
      </h2>
      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider ref={sliderRef} {...settings}>
          {feedbacks.map((item, index) => (
            <div key={index} className="px-4 focus:outline-none">
              <div
                className="relative bg-white border-2 border-[#2EC5A7] rounded-2xl shadow-lg 
                         px-6 pt-16 pb-10 flex flex-col items-center hover:shadow-xl transition-shadow"
                style={{ minHeight: '30.25rem' }}
              >
                <div className=" relative">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#3E2723] shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 48rem) 100vw, 24rem"
                    />
                  </div>
                  <img src="/greencircle.png" alt="circle" className=" absolute top-[-3.6625rem] right-[-6.75rem] " />
                </div>
                <h3 className="mt-4 text-lg font-semibold mb-3 text-brown-900">{item.name}</h3>
                <p className="text-center text-gray-700 mb-4 leading-relaxed">{item.feedback}</p>
                <div className="flex flex-row justify-between items-center gap-10 mt-auto">
                  <img src="/stars.png" alt="star" />
                  <img src="/greenface.png" alt="face" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <img src="/arrow1.png" alt="left arrow" className='absolute left-0 cursor-pointer' onClick={() => sliderRef.current?.slickPrev()} />
        <img src="/arrow2.png" alt="right arrow" className='absolute right-0 cursor-pointer' onClick={() => sliderRef.current?.slickNext()} />
      </div>
      <style jsx>{`
        .custom-dots {
          bottom: -50px;
        }
        .custom-dots li button:before {
          font-size: 14px;
          color: #FEE3BB !important;
        }
        .custom-dots li.slick-active button:before {
          color: #FFA726 !important;
        }
      `}</style>
    </section>
  );
}
