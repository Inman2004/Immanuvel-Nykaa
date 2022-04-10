
import { useState } from "react";
import './login.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock,} from "@fortawesome/free-solid-svg-icons";

function Login() {


  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/auth/signin/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: name,
          password: pass
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setPass("");
        setMessage(resJson.username);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
 
    <div class="container" >
       
    <h1>Log In</h1>
    
    <form className="login-form" onSubmit={handleSubmit}>
    <div className="form-group row">
      <label className="col-sm-2 "><FontAwesomeIcon icon={faUser}/>UserName:</label>
      
          <div className="col-sm-4">
              <input
                className="user-input"
                type="text"
                value={name}
                placeholder=" User Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
        </div>
      <div className="form-group row">
        <label className="col-sm-3 "><FontAwesomeIcon icon={faLock}/> Password: </label>
        
            <div className="col-sm-4">
              <input
                className="user-input"
                type="password"
                value={pass}
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            
            <div className="form-group row">
                
            <button className="btn-submit"  type="submit">Log In</button>OR<button className="btn-submit"  align="right">sign-up</button>
             
           </div>
      </div>

     
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  </div>
  
  );
}

export default Login;
