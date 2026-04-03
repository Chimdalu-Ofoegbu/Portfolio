import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CaseStudy from "./pages/CaseStudy";
import Resume from "./pages/Resume";
import Editor from "./pages/Editor";
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/spotlight/:slug" element={<CaseStudy />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
