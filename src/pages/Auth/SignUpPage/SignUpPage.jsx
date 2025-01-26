import React from "react";
import "./SignUpPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { toast, ToastContainer } from "react-toastify";

export function SignUpPage({ className, ...props }) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const {signup, isLoading, error} = useAuthStore();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(email, password, name);
  
      if (response.success === false) {
        toast.error(response.message || "Invalid Email", { position: "top-right" });
      } else {
        navigate("/verify-email");
        toast.success("Sign up Successful! Verify your email.", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
      });
    }
  };
  

  return (
    <div className="login-page">
<div className={`login-form ${className}`} {...props}>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">SignUp</h2>
          <p className="card-description">
            Enter your email below to register your account
          </p>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="email">Username</label>
              <input
                id="email"
                type="text"
                required
                className="form-input"
                name="username"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="form-input"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">Password</label>
              </div>
              <input
                id="password"
                type="password"
                required
                className="form-input"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Loading..." : "Sign up"}
            </button>
            {/* <button type="button" className="btn btn-secondary">
              Login with Google
            </button> */}
            <p className="signup-text">
              Already have an Account?{" "}
              <NavLink to="/login" className="signup-link"> 
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
