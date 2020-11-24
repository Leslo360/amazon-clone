import React, { useState } from 'react'
import "./login.css"
import { Link,useHistory } from 'react-router-dom'
import { motion } from "framer-motion"

import { auth } from './firebase'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth) {
                    history.push('/')
                }
            })
            .catch((error) => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push('/')
                }
            })
            .catch((error) => alert(error.message))
    }

    return (
        <motion.div initial={{ opacity: 0}} exit={{ opacity: 0}} animate={{ opacity: 1}}  className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
                    alt="amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn} className="login__signInBtn">Sign In</button>
                </form>
                <p>
                    By signin-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
                </p>
                    <button onClick={register} className="login__registerBtn">Create your Amazon account</button>
            </div>
        </motion.div>
    )
}

export default Login
