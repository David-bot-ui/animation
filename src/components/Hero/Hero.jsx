import React, { useEffect } from 'react'
import './Hero.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500, // Длительность анимации в миллисекундах
          once: false,     // Анимация будет проигрываться один раз
        });
      }, []);
    


  return (
     <>
     <section>
        <div className="container">
            <div className="wrap">
                <div   data-aos-delay="300" data-aos="flip-left" className="box"></div>
                <div   data-aos-delay="500" data-aos="flip-up" className="box"></div>
                <div  data-aos-delay="700" data-aos="flip-right" className="box"></div>
            </div>
            <div className="wrap">
                <div   data-aos-delay="900" data-aos="flip-up" className="box"></div>
                <div  data-aos-delay="1100" data-aos="flip-left" className="box"></div>
                <div data-aos-delay="1300" data-aos="flip-right" className="box"></div>
            </div>
            <div className="wrap">
                <div  data-aos="flip-up" className="box"></div>
                <div  data-aos="flip-left" className="box"></div>
                <div data-aos="flip-right" className="box"></div>
            </div>
            <div className="wrap">
                <div  data-aos="flip-up" className="box"></div>
                <div  data-aos="flip-left" className="box"></div>
                <div data-aos="flip-right" className="box"></div>
            </div>
            <div className="wrap">
                <div  data-aos="flip-up" className="box"></div>
                <div  data-aos="flip-left" className="box"></div>
                <div data-aos="flip-right" className="box"></div>
            </div>
        </div>
     </section>
     
     
     </>
  )
}

export default Hero