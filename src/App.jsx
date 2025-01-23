import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import DataFetcher from "./components/DataFetcher";
import Form from "./components/Form";
import Map from "./components/Map";
import PostDetail from "./components/PostDetail";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "light-theme" : "dark-theme"} mainDiv`}
    >
      <header>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<DataFetcher />} />
        <Route path="/data/:id" element={<PostDetail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default App;
