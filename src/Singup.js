import "./signup.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const nameVal = (event) => {
    console.log(event.target.value);
  };
  const emailVal = (event) => {
    console.log(event.target.value);
  };
  const passVal = (event) => {
    console.log(event.target.value);
  };
  const click = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };
  return (
    <form onSubmit={click}>
      <div className="signUp-form">
        <p id="p-signUp">Sign Up</p>
        <div className="signUp-box">
          <input onChange={nameVal} type="text" placeholder="Name" required />
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
          <button type="submit">Sign Up</button>
        </div>
        <div className="account-login">
          <span>Already have an account?</span>
          <span
            id="s-login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </div>
        <div className="login_option">
          <div className="bar"></div>
          <p id="p-or">or</p>
          <div className="bar"></div>
        </div>

        <button type="button" className="signUp-google">
          <FcGoogle size={21} />
          <span> Sign up with Google</span>
        </button>
      </div>
    </form>
  );
};

export default Signup;
