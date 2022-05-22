import React, { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        alert('Logged in!')
    }

    return (
        <div className="loginForm">
            <form>
                <h1>Login to Your Vault</h1>
                <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
