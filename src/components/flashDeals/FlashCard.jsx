import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiFillStar } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi'
import { BiPlus } from 'react-icons/bi'
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import {isMobile} from 'react-device-detect';

const SampleNextArrow = (props) => {
  if(isMobile){
    console.log("-----mobile")
  }else{
    console.log("-----web")
  }
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
      <IoArrowForward className="arrow_icon"/>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <IoArrowBack className="arrow_icon"/>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img className='prod_img' src={productItems.p_image} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.p_name}</h3>
                  <div className='rate'>
                    <AiFillStar className="star_icon"/>
                    <AiFillStar className="star_icon"/>
                    <AiFillStar className="star_icon"/>
                    <AiFillStar className="star_icon"/>
                    <AiFillStar className="star_icon"/>
                  </div>
                  <div className='price'>
                    <h4>${productItems.p_price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                    <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
