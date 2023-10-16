import React from "react";
export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama chat</span>
        <span className="logo">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign up</button>
        </form>
        <p>You do not have an account? Register</p>
      </div>
    </div>
  );
};
