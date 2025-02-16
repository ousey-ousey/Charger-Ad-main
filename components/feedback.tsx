'use client';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineSmile } from 'react-icons/ai';

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
          arrows: false
        }
      }
    ],
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <section className="w-full py-24 bg-[#FFF7ED] mb-20 md:mb-32 relative">
       <h2 className="text-center text-4xl font-bold text-brown-800 mb-10">
        آراء عملائنا
      </h2>
      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <div key={index} className="px-4 focus:outline-none">
              <div 
                className="relative bg-white border-2 border-[#FEC89A] rounded-xl shadow-lg 
                         px-6 pt-16 pb-10 flex flex-col items-center hover:shadow-xl transition-shadow"
                style={{ minHeight: '30.25rem' }}
              >
                <div className="">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-3 border-white shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-center object-contain"
                      sizes="(max-width: 48rem) 100vw, 24rem"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold mb-3 text-brown-900">{item.name}</h3>
                <p className="text-center text-gray-700 mb-4 leading-relaxed">{item.feedback}</p>
                <div className="flex items-center gap-2 mt-auto">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span 
                      key={starIdx}
                      className={`text-xl ${starIdx < item.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ⭐
                    </span>
                  ))}
                  <AiOutlineSmile className="text-green-600 text-2xl ml-2" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .custom-dots {
          bottom: -50px;
           color: #FB923C;
        }
        .custom-dots li button:before {
          font-size: 14px;
          color: #FEC89A;
        }
        .custom-dots li.slick-active button:before {
          color: #FB923C;
        }
      `}</style>
    </section>
  );
}