import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import httpClient from '../../httpClient';


export const Dash = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const resp = await httpClient.get("//localhost:5000/@me ")

                setUser(resp.data)
            } catch (error) {
                console.log("Not authenticated")
                navigate("/")
            }
            
        })();
    }, []);


  return (
    <div>Dupa dupa dupa</div>
  )
}
