import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./pages/Forms";
import LoginForm from "./components/LoginForm";
import SigninForm from "./components/SigninForm";
import { PageContext } from "./context/PageContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(PageContext);

  return (
    <div className={theme === "light" ? "App sunlight" : "App"}>
      <Router>
        <Routes>
          <Route path="/" element={<Forms />}>
            <Route index path="/" element={<LoginForm />} />
            <Route path="/signin" element={<SigninForm />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
