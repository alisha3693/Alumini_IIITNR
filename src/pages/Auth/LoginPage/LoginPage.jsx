import React from "react";
import "./LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { toast } from "react-toastify";

export function LoginPage({ className, ...props }) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const {login, isLoading, error, user} = useAuthStore();
  console.log(user);
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await login(email,password);
            if (response.success === false) {
              toast.error(response.message || "Login failed", { position: "top-right" });
            } else {
              navigate("/");
              toast.success("Login Successful!", {position: "top-right",});
            }
    }catch(error){
            toast.error("Something went wrong. Please try again.", {
              position: "top-right",
            });
    }
  }
  return (
    <div className="login-page">
<div className={`login-form ${className}`} {...props}>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Login</h2>
          <p className="card-description">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
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
              {isLoading ? "Loading..." : "Login"}
            </button>
            {/* <button type="button" className="btn btn-secondary">
              Login with Google
            </button> */}
            <p className="signup-text">
              Don't have an Account?{" "}
              <NavLink to="/signup" className="signup-link"> 
                Signup
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
