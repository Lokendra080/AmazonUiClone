import React from 'react'
import './Footer.css'
import logo from './../../Images/PNG25white.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {

const year= new Date().getFullYear();      


  

    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>Get to know US</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>

                <div className='footer_details_one'>
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>

                <div className='footer_details_one forres'>
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>

                </div>

                <div className='footer_details_one forres'>
                    <h3>Let Us Help You</h3>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Help</p>
                </div>
            </div>
            <div className='lastdetails'>
              <NavLink to='/'>  <img src={logo} alt='' /></NavLink>
                <p>Conditions of Use & Sale &nbsp; &nbsp; &nbsp;
                    Privacy Notice &nbsp; &nbsp; &nbsp;
                    Interest-Based Ads &nbsp; &nbsp; &nbsp;
                    © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer
