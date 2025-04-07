import App from "./App";
import React from "react";
import User from "./user";
import Login from "./login";
import Driver from "./driver";
import Metrics from "./metrics";
import Shipper from "./shipper";
import Companies from "./companies";
import ReactDOM from "react-dom/client";
import Details from "./components/orders/details";
import { BrowserRouter, Routes, Route } from "react-router";
import ShipmentForm from "./components/shipers/shipmentinfo";
import Group from "./group"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/drivers" element={<Driver />} />
      <Route path="/shippers" element={<Shipper />} />
      <Route path="/shippers/shipment" element={<ShipmentForm />} />
      <Route path="/users" element={<User />} />
      <Route path="/details" element={<Details />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/metrics" element={<Metrics />} />
      <Route path="/group" element={<Group/>} />
    </Routes>
  </BrowserRouter>
);
