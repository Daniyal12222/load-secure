import App from "./App";
import React from "react";
import User from "./user";
import Group from "./group";
import Login from "./login";
import Driver from "./driver";
import Shipper from "./shipper";
import Metrics from "./metrics";
import Documents from "./Document";
import Companies from "./companies";
import ReactDOM from "react-dom/client";
import Details from "./components/orders/details";
import ShipmentForm from "./components/shipers/shipmentinfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
      <Route path="/documents" element={<Documents/>} />
    </Routes>
  </BrowserRouter>
);
