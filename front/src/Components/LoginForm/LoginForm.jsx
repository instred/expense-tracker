import React from 'react'
import './LoginForm.css'
import { FaRegUser  } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"


const LoginForm = () => {
    return (
        <div class='wrapper'>
            <form action='POST'>
                <h1> Login </h1>
                <div className="input-box">
                    <input type='text' placeholder='Username' required/>
                    <FaRegUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type='text' placeholder='Password' required/>
                    <RiLockPasswordLine className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Passwort?</a>
                </div>
                <button type='submit'>
                    Login
                </button>
                <div className='register-link'>
                    <p>Don't have an account? <a href="#">Register Now</a></p>

                </div>


            </form>
            
        </div>
    )
}

export default LoginForm
