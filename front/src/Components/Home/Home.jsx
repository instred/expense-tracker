import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import './Home.css'
import httpClient from '../../httpClient';

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const resp = await httpClient.get("//localhost:5000/@me ")

                setUser(resp.data)
            } catch (error) {
                console.log("Not authenticated")
            }
            
        })();
    }, []);

    
    const redirect = async () => {
        let path = user != null ? '/dashboard' : '/login'; 
        navigate(path);
    }

    const logOut = async () => {
        await httpClient.post("//localhost:5000/logout")
        window.location.href = '/'
    }

    return (
    <div className="mainContainer">
        <div className={'titleContainer'}>
            <div>Welcome!</div>
        </div>
        <div>This is the home page.</div>
        <div className={'buttonContainer'}>
            {user != null ? 
            <div>
                <input
                className={'inputButton'}
                type="button"
                onClick={redirect}
                value='Go to your dashboard'
                />
                <input
                className={'inputButton'}
                type="button"
                onClick={logOut}
                value='Log out'
                />
                <div>
                {user != null ? <div>Your email address is {user.email}</div> : <div />}
                </div>
            </div> : 
            <div>
                <input
                className={'inputButton'}
                type="button"
                onClick={redirect}
                value='Log in'
                />
                
                
            </div>}
            
        
        </div>
    </div>
    )
    }

export default Home