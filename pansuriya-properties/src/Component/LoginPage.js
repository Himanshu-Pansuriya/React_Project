import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./logincss.css";

function LoginForm() {
  const [activeForm, setActiveForm] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [selectedRole, setSelectedRole] = useState("Client");
  const navigate = useNavigate();

  const handleFormChange = (formType) => {
    setActiveForm(formType);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setSignupError("Passwords do not match");
      return;
    }

    try {
      if (selectedRole === "Admin") {
          setSignupError(data.error || "You are not an Admin");
          clearSignupFields();
          return 'You are not an Admin';
      }
  
      const response = await fetch("http://localhost:3032/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          role: selectedRole,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        if (data.message === "Signup successful") {
          console.log("Signup successful:", data);
          clearSignupFields();
          showSuccessMessage("Signup successful");
          navigate("/HomePage");
        } else {
          handleErrorResponse(data);
        }
      } else {
        setSignupError(data.error || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (selectedRole === 'Admin'){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are not an Admin",
        });
      }
      else{
      setSignupError("An error occurred during signup");
      }
    }
  };
  
  
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3032/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
          role: selectedRole,
        }),
      });
  
      const userData = await response.json();
  
      if (response.ok) {
        if (userData.message === 'Login successful') {
          console.log("Login successful:", userData);
          clearLoginFields();
          showSuccessMessage("Login successful");
  
          if (selectedRole === "Admin") {
            navigate("/Admindashboard");
          } else {
            navigate("/HomePage");
          }
        } else {
          setLoginError("Invalid email, password, or role");
        }
      } else {
        setLoginError("Invalid");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login");
    }
  };  

  const clearSignupFields = () => {
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setConfirmPassword("");
    setSignupError("");
  };

  const clearLoginFields = () => {
    setLoginEmail("");
    setLoginPassword("");
    setLoginError("");
  };

  const showSuccessMessage = (message) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleErrorResponse = (data) => {
    const errorMessage = data.message || "Signup failed";
    setSignupError(errorMessage);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${activeForm === "login" ? "login" : ""}`}>
          Login Form
        </div>
        <div className={`title ${activeForm === "signup" ? "signup" : ""}`}>
          Signup Form
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={activeForm === "login"}
            onChange={() => handleFormChange("login")}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={activeForm === "signup"}
            onChange={() => handleFormChange("signup")}
          />
          <label
            htmlFor="login"
            className={`slide login ${activeForm === "login" ? "active" : ""}`}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`slide signup ${
              activeForm === "signup" ? "active" : ""
            }`}
          >
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {activeForm === "login" ? (
            <form action="#" className="login" onSubmit={handleLoginSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
              <div className="for-role">
              Role : 
              <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="Client">Client</option>
                  <option value="Admin">Admin</option>
                </select>
                </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              {loginError && (
                <div className="error-message">{loginError}</div>
              )}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <a href="#" onClick={() => handleFormChange("signup")}>
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form action="#" className="signup" onSubmit={handleSignupSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="for-role">
              Role : 
              <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="Client">Client</option>
                  <option value="Admin">Admin</option>
                </select>
                </div>
              {signupError && (
                <div className="error-message">{signupError}</div>
              )}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <div className="login-link">
                Already a member?{" "}
                <a href="#" onClick={() => handleFormChange("login")}>
                  Login
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
