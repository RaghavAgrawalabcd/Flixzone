import React,{useState} from "react";
import "../css/Register.css";
import { Link, useHistory } from "react-router-dom";
import FlixZone from "../images/FlixZone.png";
function Register() {

  const history = useHistory();
  const [newuser, setNewuser] = useState({
    email: "", password: "", cpassword: ""
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNewuser({... newuser,[name]:value})
  }
  const signUp = async (e) => {
    e.preventDefault()
    const { email, password, cpassword } = newuser;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password,cpassword
      })
    })
    if (res.status === 422 || !res) {
      window.alert("Invalid Registeration")
    }
    else {
      window.alert("Registered Successfully")
      history.push("/")
    }
  }

    return (
    <div className="Register">
      <Link to="/">
        <img
          className="RegisterLogo"
          src={FlixZone}
        />
          </Link>
        
          <div className="RegisterContainer">
              <h1>Sign-Up</h1>
              <form method="POST">
                  <h5>E-mail</h5>
                    <input type="text" name="email" value={newuser.email} onChange={handleInput}/>
                  <h5>Password</h5>
                    <input type="password" name="password" value={newuser.password} onChange={handleInput} />
                  <h5>Cpassword</h5>
                    <input type="password" name="cpassword" value={newuser.cpassword} onChange={handleInput}/>
                  
              </form>
              <p>
                  By Signing-Up you agree to the FlixZone condition of Use $ Sale.
              </p>
              <button className="RegisterButton" onClick={signUp}>Create your FlixZone Account</button>
        </div>
    </div>
  );
}

export default Register;
