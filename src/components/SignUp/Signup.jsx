import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './signup.css'
import { useAuth } from '../../Context/AuthContext'

export const Signup = () => {
    const emailref = useRef();
    const passref = useRef();
    const cpassref = useRef();
    const { signup } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        signup(emailref.current.value, passref.current.value)

    }
    return (
        <div>
            <div className="card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" ref={emailref} required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" ref={passref} required />
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" ref={cpassref} required />
                    <button>Sign Up</button>
                </form>
                <div className="divider">Already have an account? Log In</div>
            </div>
        </div>
    )
}
