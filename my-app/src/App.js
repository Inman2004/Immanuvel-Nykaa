import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"} >Nykaa</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Catagories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Brands</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Nykaa Fashion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Beauty Advice</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Nykaa Network</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Account</Link>
              </li>
              <li><a rel="nofollow" href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Register</a></li>
            <li><a rel="nofollow" href="#"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a></li>
                <li><a rel="nofollow" href="#"><i class="fa fa-credit-card" aria-hidden="true"></i> Checkout</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Routes>
            <Route exact path='/' component={<Login/>} />
            <Route path='/sign-in' component={<Login/>} />
            <Route path='/sign-up' component={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </div></Router>
  );
}
export default App;

