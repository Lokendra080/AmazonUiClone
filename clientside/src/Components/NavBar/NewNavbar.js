import React from 'react'
import './NewNavbar.css'
import NewNavbarImage from './../../Images/newNavbarIimage.jpg'

const NewNavbar = () => {
  return (
    <div className='new_nav'> 
        <div className='nav_data'>
            <div className='left_data'>
            <p>All</p>
            <p>Mobile</p>
            <p>Bestseller</p>
            <p>Fashion</p>
            <p>Customer Services</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>Today's deal</p>
            <p>Amazone Pay</p>
        
            </div>
            <div className='right_data'>
            <img src={NewNavbarImage} alt='navbar' />
            </div>
        </div>
    </div>
  )
}

export default NewNavbar
