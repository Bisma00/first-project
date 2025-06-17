import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const emailVal = (event) => {
    setEmail(event.target.value);
  };

  const passVal = (event) => {
    console.log(event.target.value);
  };

  const click = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={click}>
      <div className="login-form">
        <p id="p-login">Login</p>
        <div className="login-box">
          <input
            onChange={emailVal}
            type="email"
            required
            placeholder="E-mail"
          />
          <input
            onChange={passVal}
            type="password"
            placeholder="Password"
            required
          />
          <button>Login</button>
        </div>
        <div className="account-login">
          <span>Don't have an account?</span>
          <span
            id="s-login"
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
