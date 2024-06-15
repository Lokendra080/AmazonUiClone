
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css'

const data =["https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRSJune24/GW/BTF/CMLmen/unrec_pc_wrs_event._CB556427452_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/June/WRS/ATF/Unrec/FDFO/Shoes/1/3000_use_1._CB556363139_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS_1to4June/Gw-hero_PC-2-2x._CB556505438_.jpg",   
"https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/SVD/Jun/Min-3000-1200._CB556292338_.png",
"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/updated/SKincare_PC._CB556364922_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",

]

const Banner =() => {
    return (
    

        <Carousel className='carasousel'
         autoPlay={true}
          animation='slide' 
         indicators={false}
         navButtonsAlwaysInvisible={true} 
         cycleNavigation={true} 
         navButtonsProps={{
            style:{
                backgroundColor:'#fff', 
                color:"#494949",
                 borderRadius:0,
                 marginTop:-22,
                  height:"104px"}
        }}>
            {data.map((img,i)=> {
                return(
                    <>
                    <img src={img} alt='txet' className='banner_img' />
                    </>
                )

                }
            )}
        </Carousel>
        
    )
}

export default Banner
