"use client";

import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className='max-w-6xl mx-auto' ref={counterRef}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center py-12'>
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
                <p className='text-4xl font-bold animate-pulse-slow'>331,793</p>
                <p className='text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-700'>Succesful and compaigns</p>
            </div>
    
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
                <p className='text-4xl font-bold animate-pulse-slow'>$215,415,327</p>
                <p className='text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-700'>Earned so far by our affiliates</p>
            </div>
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
                <p className='text-4xl font-bold animate-pulse-slow'>14,122,817</p>
                <p className='text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-700'>Calls attracted</p>
            </div>
        </div>
    </div>
  )
}

export default Counter