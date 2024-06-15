import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../Home/ProductData';
import './Cart.css'
import { Divider } from '@react-md/divider'
import { useParams } from 'react-router-dom'

// import {LoginContex} from '../Context/Contex'

const Cart = () => {

    const { id } = useParams("");

    // const {account, setAccount} = useContext(LoginContex)
    const [inddata, setIndedata] = useState([]);
    // console.log(inddata);

    const getinddata = async () => {
        const res = await fetch(`/getproducts/${id}`, {
            method: "GET",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        console.log(data);
        if (res.status !== 201) {
            alert("no data available in get data");
        } else {
            // console.log("getdata");
            setIndedata(data);
        }
    };


    useEffect(() => {
        getinddata();
    },[id]);

    // add cart function
    const addtocart = async (id) => {
        console.log(id);
        const check = await fetch(`/addcart/${id}`, {
            
            method: "POST",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inddata
            }),
            credentials: "include"
        });
        console.log(check);
        const data1 = await check.json();
        console.log(data1 );

        if (check.status !== 201 ) {
            alert("no data available addtocart")
        } else {
            alert("cart add ho gya hain");
            // setAccount(data1)

            // history.push("/buynow");
        }
    }
    return (



        <div className='cart_section'>
            {inddata && Object.keys(inddata).length &&
                <div className='cart_container'>
                    <div className='left_cart'>
                        <img src={inddata.detailUrl} alt="cart_img" />
                        <div className='cart_btn'>
                            <button className='cart_btn1' onClick={ () =>  addtocart(inddata.id) }>Add to Cart</button>
                            <button className='cart_btn2'>Buy Now</button>
                        </div>

                    </div>
                    <div className='right_cart'>
                        <h3>{inddata.title.shortTitle}</h3>
                        <h3>{inddata.title.longTitle}</h3>
                        <Divider />
                        <p className='mrp'>M.R.P :₹{inddata.price.mrp} </p>
                        <p className=''>Deal of the Day : <span style={{ color: "#B12704", fontWeight: "bold" }}> ₹{inddata.price.cost}.00</span> </p>
                        <p className=''>You Save : <span style={{ color: "#B12704", fontWeight: "bold" }}> ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount})</span> </p>

                        <div className='discount_box'>
                            <h5>Discount : <span style={{ color: "#111" }}>{inddata.discount}</span></h5>
                            <h4>Free Delivery : <spna style={{ color: "#111", fontWeight: "600" }} > Oct 8 - 21 </spna> Details  </h4>
                            <p>Fastest Delivery <spna style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</spna> </p>
                            <p className='description'>
                                About the Item : <span style={{ color: "#565959", fontWeight: 500, fontSize: 14, latterSpacing: "0.4px" }}>{inddata.description}</span>
                            </p>

                        </div>

                    </div>
                </div>}
        </div>


    )
}

export default Cart
