import React, { useState } from 'react'
import './Common.css'
import logo from '../../Images/PNG21black.png'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingUp() {

const [userData,setUserData] =useState({
  fname:"",
  email:"",
  number:"",
  password:"",
  cpassword:""
})
// console.log(userData)

const addData=(data)=>{
  const {name,value}=data.target

  setUserData(()=>{
    return{
      ...userData,
      [name]:value
    }
  })
}

//sending register data to backend
const senddata = async(e)=>{
e.preventDefault();
const {fname, email, number, password, cpassword} = userData;

const res= await fetch("/register",{
  method:"POST",
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify({fname, email, number, password, cpassword})
})

const data = await res.json();
// console.log(data)

if(res.status=== 422 || !data){
  toast.warn("Invalid Details !", {
    position: "top-center"
});
}else{
  toast.success("Registration Successfully done !", {
    position: "top-center"
});
  setUserData({...userData, fname:"",email:"",number:"",password:"",cpassword:"",});
}
}

 
  return (
    <section>
      <div className="sign_container">
          <img src={logo} alt="signupimg" />
        <div className="sign_header">
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Create Account</h1>
            <div className="form_data">
              <label htmlFor="fname">Your Name</label>
              <input type="text" name="fname"  onChange={addData} value={userData.fname}
                id="name" />
            </div>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={addData} value={userData.email}
                id="email" />
            </div>

            <div className="form_data">
              <label htmlFor="number">Number</label>
              <input type="number" name="number" onChange={addData} value={userData.number}
                id="number" />
            </div>

            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={addData} value={userData.password}
                id="password" placeholder="At least 6 characters" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Confirm Password</label>
              <input type="cpassword" name="cpassword" onChange={addData} value={userData.cpassword}
                id="cpassword"  />
            </div>
            <button type="submit" className="signin_btn" onClick={senddata} >Continue</button>

            <div className='signin_info'>
              <p>Already have an account?</p>
              <NavLink to='/login'>Sign in</NavLink>
            </div>
          </form>

        </div>
        <ToastContainer />        
      </div>

    </section>
  )
}

export default SingUp
