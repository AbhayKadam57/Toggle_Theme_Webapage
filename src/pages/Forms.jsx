import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { PageContext } from "../context/PageContext";
import NightImage from "../../public/undraw_into_the_night_vumi.svg";
import DayImage from "../../public/undraw_thoughts_re_3ysu.svg";

const Forms = () => {
  const { theme } = useContext(PageContext);

  return (
    <>
      <div className={"center"}>
        <div className={theme === "light" ? "Image sunlight" : "Image"}>
          <img src={theme === "light" ? DayImage : NightImage} alt="" />
        </div>
        <div className="form">
          <ThemeToggle />
          <div className="Greeting">
            <h2>Hello</h2>
            <h1>{theme === "light" ? "Good Morning!" : "Good Evening!"}</h1>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Forms;
