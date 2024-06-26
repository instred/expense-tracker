import React, {useState} from 'react'
import './LoginForm.css'
import { FaRegUser  } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"
import httpClient from '../../httpClient'


const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logInUser = async () => {
        console.log(email, password)

        try{
            const resp = await httpClient.post("//localhost:5000/login", {
                email,
                password,
            });

            window.location.href = '/dashboard';
        }
        catch (e) {
            if (e.response.status){
                alert("invalid creds");
            }
        }

    }

    return (
        <div class='wrapper'>
            <form>
                <h1> Login </h1>
                <div className="input-box">
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
                    <FaRegUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                    <RiLockPasswordLine className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Passwort?</a>
                </div>
                <button onClick={() => logInUser()} type='button'>
                    Login 
                </button>
                <div className='register-link'>
                    <p>Don't have an account? <a href="/register">Register Now</a></p>

                </div>


            </form>
            
        </div>
    )
}

export default LoginForm
