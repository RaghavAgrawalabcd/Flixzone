import React,{useState} from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FlixZone from "../images/FlixZone.png";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newuser, setNewuser] = useState({
    email: "", password: ""
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNewuser({... newuser,[name]:value})
  }
  const signIn = async (e) => {
    e.preventDefault()
    const { email, password } = newuser;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })
    if (res.status === 400 || !res) {
      window.alert("Invalid")
    }
    else {
      window.alert("Login Successfully")
      dispatch({
        type: 'Set_User',
        user : `${res.message}`
      })
      history.push("/")
    }
  }

    return (
    <div className="Login">
      <Link to="/">
        <img
          className="LoginLogo"
          src={FlixZone}
        />
          </Link>
        
          <div className="LoginContainer">
              <h1>Sign-In</h1>
              <form method="POST">
                  <h5>E-mail</h5>
                    <input type="text" name="email" value={newuser.email} onChange={handleInput}/>
                  <h5>Password</h5>
                    <input type="password" name="password" value={newuser.password} onChange={handleInput} />                   
          </form>
              <button className="LoginSignButton" onClick={signIn}>Sign In </button>
              <p>
                  By Signing-Up you agree to the FlixZone condition of Use $ Sale.
              </p>
              <Link to="/register">
              <button className="LoginRegisterButton">Create your FlixZone Account</button>
            </Link>
        </div>
    </div>
  );
}
export default Login;

