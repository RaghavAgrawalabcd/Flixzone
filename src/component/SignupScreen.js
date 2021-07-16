import React,{useRef} from 'react'
import { auth } from './firebase'
import "../css/SignupScreen.css"
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from "../actions/index"


function SignupScreen() {
    const dispatch = useDispatch();
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then((authUser) => {
                dispatch(login())
        }).catch((error) => {
            alert(error.message)
        })
    ;}
    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className="signupscreen">
            <form method="POST"> 
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" name="email" placeholder="Email" />
                <input ref={passwordRef} type="password" name="password" placeholder="password"/>
                <button type="submit"  onClick={signIn}> Sign In</button>
                <h4><span style={{color:"gray"}}>New to FlixZone? </span><span className="signupscreen_link" onClick={signUp}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignupScreen
