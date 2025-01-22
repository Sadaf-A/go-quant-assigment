import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import {GoQuantDashboard} from "./components/Dashboard/Dashboard";
import TradeComponent from "./components/Trade/TradeComponent";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<GoQuantDashboard />} />
          <Route path="/trade" element={<TradeComponent />} />
          <Route path="/" element={<LoginForm />}/>
        </Routes>
    </Router>
  );
};

export default App;
