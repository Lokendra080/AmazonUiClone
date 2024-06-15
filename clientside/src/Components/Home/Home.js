import React, { useEffect } from 'react'
import Banner from './Banner'
import './Home.css'
import { getProducts } from '../Redux/Action/Action'
import Slide from './Slide'
import {useDispatch,useSelector} from "react-redux"

const Home = () => {

    const {Products} = useSelector(state=> state.getProductsdata);
        // console.log(Products)
        const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return (
        <div ClassNames="home_section">
            <div ClassNames="banner_part">

                <Banner />
            </div>
            <div className='slide_part'>
                <div className='left_slide'>

                    <Slide  title="Deal of The Day" products={Products}/>
                </div>
                <div className='right_slide'>
                    <h4>Festive latest launches</h4>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="##">see more</a>
                </div>
            </div>
            <Slide  title="Today's deal" products={Products}/>
            <div className='center_img'>
                    <img src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jp' alt=''/>
                </div> 
            <Slide title="Best Seller" products={Products}/>
            <Slide title="Upto 80% Off" products={Products}/>
        </div>
    )
}

export default Home
