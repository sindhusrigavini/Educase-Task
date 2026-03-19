import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">

      <h2>Signin to your <br/> PopX account</h2>

      <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" />
      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <button 
        className="login-btn"
        onClick={() => navigate("/profile")}
      >
        Login
      </button>

      <p className="signup-text">
        Don't have an account? 
        <Link to="/signup"> Create Account</Link>
      </p>

    </div>
  );
}

export default Login;
