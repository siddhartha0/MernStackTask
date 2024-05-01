import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/body/Body.tsx";
import ContactusFom from "./forms/ContactusFom.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Body />} />
        </Route>
        <Route path="/contactUs" element={<ContactusFom />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
