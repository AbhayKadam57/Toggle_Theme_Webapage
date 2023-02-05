import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../context/PageContext";

const LoginForm = () => {
  const { theme } = useContext(PageContext);

  return (
    <>
      <form>
        <h2>Login Your Account</h2>
        <div className="input">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className={theme === "light" ? "attention sunlight" : "attention"}>
          <a href="#">forgot password?</a>
        </div>
        <button className={theme === "light" ? "btn sunlight" : "btn"}>
          Log In
        </button>
      </form>

      <Link
        to="/signin"
        style={{ color: theme === "light" ? "#19c441" : "#6645D0" }}
      >
        Create An Account
      </Link>
    </>
  );
};

export default LoginForm;
