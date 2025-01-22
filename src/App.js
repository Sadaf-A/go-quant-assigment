import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";
import {GoQuantDashboard} from "./components/Dashboard/Dashboard";
import TradeComponent from "./components/Trade/TradeComponent";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<GoQuantDashboard />} />
          <Route path="/trade" element={<TradeComponent />} />
          <Route path="/" element={<RegisterForm />}/>
        </Routes>
    </Router>
  );
};

export default App;
