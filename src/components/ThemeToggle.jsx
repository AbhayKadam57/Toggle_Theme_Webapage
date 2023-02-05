import React, { useContext } from "react";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { PageContext } from "../context/PageContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(PageContext);

  console.log(theme);

  return (
    <>
      <div className="toggle">
        <div className="toggle-btn" onClick={() => toggleTheme(theme)}>
          <NightsStayOutlinedIcon className="night" />
          <LightModeOutlinedIcon className="light" />
          <div
            className={
              theme === "light" ? "toggle-ball" : "toggle-ball ball-position"
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
