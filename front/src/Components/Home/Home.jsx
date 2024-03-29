import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = () => {
        let path = '/login'; 
        navigate(path);
    }

    return (
    <div className="mainContainer">
        <div className={'titleContainer'}>
        <div>Welcome!</div>
        </div>
        <div>This is the home page.</div>
        <div className={'buttonContainer'}>
        <input
            className={'inputButton'}
            type="button"
            onClick={onButtonClick}
            value={loggedIn ? 'Go to your dashboard' : 'Go to log in page'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
        </div>
    </div>
    )
    }

export default Home