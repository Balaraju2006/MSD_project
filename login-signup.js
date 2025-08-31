import React, { useState } from 'react';
import './loginsignup.css';

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <input type="email" placeholder="Email Id" />
        </div>

        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>

        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};
