import React, { useState, useRef } from "react";
import "./VerificationEmailPage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthStore } from "../../../store/authStore";

export default function VerificationEmailPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const {isLoading, error, verifyEmail} = useAuthStore();


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default submission
    const verificationCode = code.join(""); // Combine the 6 digits into a single string
    
    if (verificationCode.length === 6) {
        await verifyEmail(verificationCode);
        if(!error && !isLoading){
            toast.success("Email verified successfully!", {
                position: "top-right",
              });
        }
    }
}
  
  const handleChange = (value, index) => {
    if (isNaN(value)) return; 

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input if available
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "") {
      // Move focus to the previous input if available
      if (index > 0) inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="verification-page">
      <div className="verification-card">
        <h2 className="verification-title">Verify Your Email</h2>
        <p className="verification-description">
          Enter the 6-digit code we sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="verification-form">
          <div className="verification-input-group">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="verification-input-block"
                required
              />
            ))}
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            className="verification-button"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
}

