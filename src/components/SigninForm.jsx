import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../context/PageContext";

const SigninForm = () => {
  const { theme } = useContext(PageContext);

  return (
    <>
      <form>
        <h2>Create Your Account</h2>
        <div className="input">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className={theme === "light" ? "btn sunlight" : "btn"}>
          Sign In
        </button>
      </form>

      <Link to="/" style={{ color: theme === "light" ? "#19c441" : "#6645D0" }}>
        All ready have an account? Click here
      </Link>
    </>
  );
};

export default SigninForm;
