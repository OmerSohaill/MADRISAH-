import React, { useState, useEffect, useRef } from 'react';
import './slider.css';

const ImageSlider = () => {
  const images = [
    'https://images.unsplash.com/photo-1581714274643-878412680e5a?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1697730196206-7d8f455766bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1623261216813-fbbe4fb7df44?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]; // Add your image URLs here

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      const { top, bottom } = sliderRef.current.getBoundingClientRect();
      setIsVisible(top < window.innerHeight && bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  const subs = () => {
    window.location.href = 'https://www.youtube.com/channel/UCqKh-pASyz1aryH9LrH0OzQ';
  };

  return (
    
    <div ref={sliderRef} className={`grid md:grid-cols-4 bm ${isVisible ? 'fade-in' : ''}`}>
      <div className="max-w-screen-lg mx-auto overflow-hidden col-span-1 slider as">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className=" w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className='box2 col-span-1 rounded-r-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
        <div className="flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/6325/6325757.png" alt="Subscribe Icon" className="w-6 h-6 mr-2 jk" />
          92.3K Subscribers
        </div>
      </div>

      <div className='col-span-2 yo'>
        <h1 className='bx'>---Youtube</h1>
        <p className='bow'>Popular</p>
        <p>Uploads from My Youtube Channel</p>
        <p className='bow vs'>I would really appreciate it if you could check it out and maybe even hit the subscribe</p>
        <p className='bow vs'>button if you enjoy the content.</p>
        <p className='bow vs'>Thanks in advance!</p>
        <button className="sa flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={subs}>subscribe</button>
      </div>

      <div className='box2 bpx col-span-1 col-start-2 rounded-r-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
        <img src="https://cdn-icons-png.flaticon.com/128/1709/1709973.png" alt="Subscribe Icon" className="w-6 h-6 mr-2 jk" />
        290 Videos Uploaded
      </div>
    </div>
  );
};

export default ImageSlider;
