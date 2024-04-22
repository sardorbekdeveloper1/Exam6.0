import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Teachers from "./pages/Teachers/Teachers";
import Exams from "./pages/Exams/Exams";
import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import Settings from "./pages/Settings/Settings";
import Billing from "./pages/Billing/Billing";

function Authentication() {
  return (
    <div className="flex mx-auto container">
      <div className="navbar w-[18%] h-[100vh] overflow-y-auto bg-[#152259]">
        <Navbar />
      </div>
      <div className="routes w-[82%] h-[100vh] overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/exams" element={<Exams/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Authentication;
