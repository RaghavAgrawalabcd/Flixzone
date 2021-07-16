import React,{useState} from 'react'
import "../css/LoginScreen.css"
import FlixZone from "../images/FlixZone.png";
import SignupScreen from './SignupScreen'
function LoginScreen() {
    const [signIn,setSignIn]=useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScree_background">
                <img className="loginscreen_logo" src={FlixZone} alt="Not Found" />
                
                <button className="loginscreen_button" onClick={()=>setSignIn(true)}>
                    Sign In
                </button>
                <div className="loginscreen_gradient" />
                <div className="loginscreen_body">
                    { signIn ? (<SignupScreen/>) : (<>
                        <h1>
                        Unlimited movies, TV shows and more.
                    </h1>
                    <h2>
                        Watch anywhere. Cancel anytime.
                    </h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>
                    <div className="loginscreen_input">
                    <form>
                        <input className="FormInput" type="email" placeholder="Email Address" />
                        <button className="loginscreen_getstarted" onClick={()=>setSignIn(true)}>
                            GET STARTED
                        </button>
                    </form>
                </div>
                    </>)}
                    
                </div>
                
            </div>
        </div>
    )
}

export default LoginScreen
