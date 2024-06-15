
import React from 'react'
import './Slide.css'
import Carousel from 'react-multi-carousel';
// import {products} from './ProductData'
import {NavLink} from 'react-router-dom'
import { Divider } from "@react-md/divider";
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Slide = ({ title, products}) => {
  return (
    < div className='products_section'>
      <div className='products_deal'>
        <h3>{ title}</h3>
        <button className='view_btn'> View All</button>
        </div>
        <Divider />
        <Carousel
        responsive={responsive}
        infinite={true}
        disableDrag={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itmeClass="carousel-item-padding-40-px"
        containerclassName='carousel-container'
        >{
          products.map((data)=>{
            return(
              <NavLink to={`/getproducts/${data.id}`}>
              <div className='products_items'>
                <div className='products_items'>
                  <img src={data.url} alt='productsImage' />
                </div>
                  <p className='products_name'>{data.title.shortTitle}</p>
                  <p className='products_offer'>{data.price.discount}</p>
                  <p className='products_explore'>{data.tagline}</p>

              </div>
              </NavLink>
            )
          })
        }
            
        </Carousel> 

    </div>
  )
}

export default Slide
