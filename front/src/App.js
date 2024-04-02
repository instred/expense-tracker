import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import LoginForm from './Components/LoginForm/LoginForm'
import './App.css'
import { useEffect, useState } from 'react'
import NotFound from './Components/Misc/NotFound'
import { Dash } from './Components/Dashboard/Dash'
import RegistrationForm from './Components/LoginForm/RegistrationForm'

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dash />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path='*'element={<NotFound/>}/>
            </Routes>   
        </BrowserRouter>
    </div>
    )
}

export default App