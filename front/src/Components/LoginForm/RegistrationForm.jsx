import React, {useState} from 'react'
import './LoginForm.css'
import { FaRegUser  } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"
import httpClient from '../../httpClient'

const RegistrationForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logInUser = async () => {
        console.log(email, password)

        try{
            const resp = await httpClient.post("//localhost:5000/register", {
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
                <button onClick={() => logInUser()} type='button'>
                    Register 
                </button>


            </form>
            
        </div>
    )
}
export default RegistrationForm
