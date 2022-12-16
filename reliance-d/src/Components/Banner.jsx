import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
// import Style from "./Home.module.css";
import ProductSlide from './ProductSlide';

const Banner = ({list}) => {
  return (
    <div>
        <Slide autoplay={true} arrows={true} duration={1000} pauseOnHover={true}>
                {list.map(e=>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${e})` }}></div>
            </div>)}      
            </Slide>
    </div>
  )
}

export default Banner