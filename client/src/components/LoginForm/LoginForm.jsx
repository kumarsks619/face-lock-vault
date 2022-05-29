import React, { useState, useRef } from 'react'
import './LoginForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const videoRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault()
        alert('Logged in!')
    }
    const handleFaceImage = (e) => {
        e.preventDefault();
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            videoRef.current.srcObject = stream;
        }).catch((err) => { console.log("Err: ", err) })
    }

    return (
        <div className="loginForm">
            <form>
                <h1>Login to Your Vault</h1>
                {videoRef && <video ref={videoRef} autoPlay />}
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
                <button type="submit" onClick={handleFaceImage}>
                    Capture
                </button>
            </form>
        </div>
    )
}

export default LoginForm
