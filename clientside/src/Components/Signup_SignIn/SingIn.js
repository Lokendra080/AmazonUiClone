import React, { useState } from 'react'
import './Common.css'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/PNG21black.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingIn() {

  const [logData, setData] = useState({
    email: "",
    password: ""
  });

  const addData = (data) => {
    const { name, value } = data.target
    setData(() => {
      return {
        ...logData, [name]: value
      }
    })

  }

  const senddata = async (e) => {
    e.preventDefault();
    const { email, password } = logData;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })

    });
    const data = await res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      toast.warn("Invalid User !", {
        position: "top-center"
      });
    } else {
      toast.success("LogIn Seccesfully!", {
        position: "top-center"
      });
      setData({ ...logData, email: "", password: "" })
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
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"
                onChange={addData}
                value={logData.email}
                id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"
                onChange={addData}
                value={logData.password}
                id="password" placeholder="At least 6 characters" />
            </div>
            <button type="submit" className="signin_btn" onClick={senddata} > Continue</button>
          </form>

        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button>
        </div>
        <ToastContainer />
      </div>

    </section>
  )
}

export default SingIn
