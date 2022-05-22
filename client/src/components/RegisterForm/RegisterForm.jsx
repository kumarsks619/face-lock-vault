import React, { useState } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        alert('Registered!')
    }

    return (
        <div className="registerForm">
            <form>
                <h1>Create Vault Account</h1>
                <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={handleRegister}>
                    Sign Up!
                </button>
            </form>
        </div>
    )
}

export default RegisterForm
