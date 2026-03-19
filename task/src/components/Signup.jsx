
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  return (
    <div className="signup-container">

      <h2>Create your <br/> PopX account</h2>

      <label>Full Name *</label>
      <input type="text" placeholder="Enter full name" />

      <label>Phone number *</label>
      <input type="text" placeholder="Enter phone number" />

      <label>Email address *</label>
      <input type="email" placeholder="Enter email address" />

      <label>Password *</label>
      <input type="password" placeholder="Enter password" />

      <label>Company name *</label>
      <input type="text" placeholder="Enter company name" />

      <p className="agency-text">Are you an Agency? *</p>

    <div className="radio-group">
    <label className="radio-option">
      <input type="radio" name="agency" defaultChecked />
      Yes
    </label>

    <label className="radio-option">
      <input type="radio" name="agency" />
      No
    </label>
  </div>
      <button 
        className="primary-btn"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>

    </div>
  );
}

export default Signup;