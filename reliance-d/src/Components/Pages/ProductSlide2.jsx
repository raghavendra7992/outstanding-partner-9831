import { Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Style from "./Home.module.css";

const ProductSlide2 = ({list,number}) => {
  const navigate=useNavigate()
    const properties1 = {
        slidesToShow: number,
        slidesToScroll: 4,
        autoplay: false,
        indicators: true,
        transitionDuration: 100,
           responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: number,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      ]
      }
  return (
    <div>
        <Slide id={Style.na} {...properties1}>
        {list.map((el) => {
          return (
            <div className="each-slide" id={Style.w1} onClick={()=>navigate(el.link)}>
              <div className={Style.q2} id={Style.t}>
                <img src={el.img} alt="no" style={{height:"200px",width:"200px"}}/>
                <Text fontSize='xl'>{el.tag}</Text>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}

export default ProductSlide2