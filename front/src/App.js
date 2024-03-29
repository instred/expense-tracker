import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import LoginForm from './Components/LoginForm/LoginForm'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<LoginForm setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App