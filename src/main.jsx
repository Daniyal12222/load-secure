import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Login from "./login";
import Driver from "./driver";
import Shipper from "./shipper";
import User from "./user";
import Details from "./components/orders/details"


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/drivers" element={ <Driver/> } />
      <Route path="/shippers" element={ <Shipper/> } />
      <Route path="/users" element={ <User/> } />
      <Route path="/details" element={ <Details/> } />

    </Routes>
  </BrowserRouter>
);
